"use client";

import { useState } from "react";
import axios from "axios";
import { LoaderCircle, Send } from "@/ui/icons";
import { useForm } from "react-hook-form";
import Section from "@/ui/Section";
import Reveal from "@/ui/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/data/site";

interface UserInput {
  name: string;
  email: string;
  message: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const Contact = () => {
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UserInput>({ mode: "onTouched", criteriaMode: "firstError" });

  const sendMessage = async (data: UserInput) => {
    try {
      await axios.post("/api/email", data);
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
        <a
          href={`mailto:${site.email}`}
          className="mt-3 inline-block link-subtle"
        >
          {site.email}
        </a>
      </Reveal>

      <Reveal delay={0.1}>
        <form className="mt-10 grid gap-4" onSubmit={handleSubmit(sendMessage)} noValidate>
          <Field error={errors.name?.message}>
            <Input placeholder="Your name" aria-invalid={!!errors.name} {...register("name", { required: "Please enter your name." })} />
          </Field>

          <Field error={errors.email?.message}>
            <Input
              type="email"
              placeholder="Your email"
              aria-invalid={!!errors.email}
              {...register("email", {
                required: "Please enter your email address.",
                pattern: { value: emailPattern, message: "Please enter a valid email address." },
              })}
            />
          </Field>

          <Field error={errors.message?.message}>
            <Textarea placeholder="Tell me about your project" aria-invalid={!!errors.message} {...register("message", { required: "Please enter a message." })} />
          </Field>

          <div className="flex flex-wrap items-center gap-4">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <LoaderCircle className="animate-spin" /> : <Send />}
              {isSubmitting ? "Sending..." : "Send message"}
            </Button>

            {status === "success" && <p className="text-base">Your message has been sent. You will receive a confirmation by email.</p>}
            {status === "error" && (
              <p className="text-base text-destructive">Your message could not be sent. Please try again or email {site.email}.</p>
            )}
          </div>
        </form>
      </Reveal>
    </Section>
  );
};

const Field = ({ children, error }: { children: React.ReactNode; error?: string }) => (
  <div>
    {children}
    {error && (
      <p role="alert" className="mt-0.5 text-base text-destructive">
        {error}
      </p>
    )}
  </div>
);

export default Contact;
