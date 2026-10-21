"use client";

import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Check, CircleAlert, GitHub, LinkedIn, LoaderCircle, Send } from "@/ui/icons";
import Section from "@/ui/Section";
import Reveal from "@/ui/Reveal";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { LIMITS, validateEmail, validateMessage, validateName } from "@/lib/validation";
import { site } from "@/data/site";

interface UserInput {
  name: string;
  email: string;
  message: string;
  /** Hidden bot trap: people leave it empty */
  website?: string;
}

type Field = "name" | "email" | "message";

const Contact = () => {
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields, isSubmitting },
  } = useForm<UserInput>({ mode: "onTouched", criteriaMode: "firstError" });

  // A field shows the check once the visitor has left it and it passes validation
  const isValid = (field: Field) => !!touchedFields[field] && !errors[field];

  const sendMessage = async (data: UserInput) => {
    try {
      await axios.post("/api/email", {
        name: data.name.trim(),
        email: data.email.trim(),
        message: data.message.trim(),
        website: data.website,
      });
      reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus(null), 12000);
  };

  return (
    <Section id="contact">
      <Reveal>
        <p className="text-2xl font-medium leading-tight tracking-tight">Got a project in mind? Let&apos;s talk.</p>
        <a href={`mailto:${site.email}`} className="mt-3 inline-block link-subtle">
          {site.email}
        </a>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={site.github} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "secondary" })}>
            <GitHub />
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "secondary" })}>
            <LinkedIn />
            LinkedIn
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <form className="mt-10 grid gap-4" onSubmit={handleSubmit(sendMessage)} noValidate>
          {/* Bot trap: hidden from people and from keyboard and screen readers */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="pointer-events-none absolute left-[-9999px] h-0 w-0 opacity-0"
            {...register("website")}
          />

          <FieldRow error={errors.name?.message} valid={isValid("name")}>
            <Input
              placeholder="Your name"
              autoComplete="name"
              maxLength={LIMITS.nameMax}
              aria-invalid={!!errors.name}
              className={cn("pr-10", isValid("name") && "border-success")}
              {...register("name", { validate: validateName })}
            />
          </FieldRow>

          <FieldRow error={errors.email?.message} valid={isValid("email")}>
            <Input
              type="email"
              inputMode="email"
              placeholder="Your email"
              autoComplete="email"
              autoCapitalize="off"
              spellCheck={false}
              maxLength={LIMITS.emailMax}
              aria-invalid={!!errors.email}
              className={cn("pr-10", isValid("email") && "border-success")}
              {...register("email", { validate: validateEmail })}
            />
          </FieldRow>

          <FieldRow error={errors.message?.message} valid={isValid("message")} multiline>
            <Textarea
              placeholder="Tell me about your project"
              maxLength={LIMITS.messageMax}
              aria-invalid={!!errors.message}
              className={cn("pr-10", isValid("message") && "border-success")}
              {...register("message", { validate: validateMessage })}
            />
          </FieldRow>

          <div className="flex flex-wrap items-center gap-4">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <LoaderCircle className="animate-spin" /> : <Send />}
              {isSubmitting ? "Sending..." : "Send message"}
            </Button>

            {status === "success" && (
              <p className="text-base">Your message has been sent. You will receive a confirmation by email.</p>
            )}
            {status === "error" && (
              <p className="text-base text-destructive">
                Your message could not be sent. Please try again or email {site.email}.
              </p>
            )}
          </div>
        </form>
      </Reveal>
    </Section>
  );
};

interface FieldRowProps {
  children: React.ReactNode;
  error?: string;
  valid?: boolean;
  multiline?: boolean;
}

// Wraps an input with its validation sign (check or alert icon) and its error message
const FieldRow = ({ children, error, valid, multiline }: FieldRowProps) => {
  const position = multiline ? "top-3" : "top-1/2 -translate-y-1/2";

  return (
    <div>
      <div className="relative">
        {children}
        {error && (
          <CircleAlert
            aria-hidden="true"
            className={cn("pointer-events-none absolute right-3 h-4 w-4 text-destructive", position)}
          />
        )}
        {valid && (
          <Check aria-hidden="true" className={cn("pointer-events-none absolute right-3 h-4 w-4 text-success", position)} />
        )}
      </div>
      {error && (
        <p role="alert" className="mt-0.5 text-base text-destructive">
          {error}
        </p>
      )}
    </div>
  );
};

export default Contact;
