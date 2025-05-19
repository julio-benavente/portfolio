"use client";

import React, { HTMLAttributes, ReactNode, useState } from "react";
import * as C from "@/components";
import cls from "@/helpers/cls";
import axios from "axios";
import { useForm, UseFormRegister } from "react-hook-form";

interface UserInput {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [messageIsSuccessfull, setMessageIsSuccesful] = useState<null | boolean>(null);

  const defaultValues: UserInput = {
    name: "Julio Benavente",
    email: "julio.benavente.02@gmail.com",
    message: "Este es un mensaje de prueba hecho el " + new Date().toLocaleDateString(),
  };

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    resetField,
    formState: { errors },
  } = useForm<UserInput>({
    mode: "all",
    criteriaMode: "firstError",
    // defaultValues: defaultValues,
  });

  const sendMessage = async (data: UserInput) => {
    try {
      const res = await axios.post("/api/email", {
        email: data.email,
        name: data.name,
        message: data.message,
      });

      resetField("name");
      resetField("email");
      resetField("message");

      setMessageIsSuccesful(true);
      setTimeout(() => {
        setMessageIsSuccesful(null);
      }, 12000);
    } catch (error) {
      setMessageIsSuccesful(false);
      setTimeout(() => {
        setMessageIsSuccesful(null);
      }, 12000);
    }
  };

  return (
    <div id="contact" className="relative border-base-b bg-primary-bg">
      {/* <div cl/assName={cls("absolute top-0 left-0 w-full h-80 bg-white border-base border-t-0 border-x-0")}></div> */}
      <div className={cls("relative container z-10", "lg:max-w-5xl lg:mx-auto")}>
        <div className="p-10 border-base rounded-lg bg-primary-bg-700">
          <div className="flex flex-col items-center mb-12">
            <C.Badge className="mb-7">Contact</C.Badge>

            <h2 className="text-4xl text-center md:max-w-lg md:mx-auto">
              Got a project in mind? Let&lsquo;s get in touch.
            </h2>
          </div>

          <form className={cls("grid grid-cols-1 gap-10", "md:grid-cols-2")} onSubmit={handleSubmit(sendMessage)}>
            <InputContainer errorMessage={errors.name?.message}>
              <TextInput
                placeholder="What's your name?"
                register={register("name", {
                  required: "I need you name 😉",
                })}
              />
            </InputContainer>

            <InputContainer errorMessage={errors.email?.message}>
              <TextInput
                placeholder="What's your email?"
                register={register("email", {
                  required: "Don't forget the email 😅",
                  pattern: {
                    value:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "That email doesn't look real 🤔",
                  },
                })}
              />
            </InputContainer>

            <InputContainer className="md:col-span-full" errorMessage={errors.message?.message}>
              <TextareaInput
                placeholder="Tell me about your project"
                register={register("message", {
                  required: "... I expect a message 🙄",
                })}
              />
            </InputContainer>

            {messageIsSuccessfull !== null && (
              <div className="col-span-full max-w-sm mx-auto">
                {messageIsSuccessfull === true && (
                  <p className="text-green-800 text-center">
                    Awesome! The message was sent. You should see a confirmation on your inbox
                  </p>
                )}

                {messageIsSuccessfull === false && (
                  <p className="text-red-800 text-center">
                    Noo! Something went wrong. Send me an message at julio.benavente.02@gmail.com
                  </p>
                )}
              </div>
            )}

            <C.Button
              className="max-w-fit mx-auto md:col-span-full"
              // onClick={sendMessage}
            >
              Send
            </C.Button>
            <pre>{JSON.stringify(watch, null, 2)}</pre>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const InputContainer = (props: { children: ReactNode; errorMessage?: string; className?: string }) => {
  return (
    <div className={cls("relative", props.className)}>
      {props.children}
      {props.errorMessage && (
        <span className="absolute bottom-0 left-0 translate-y-full text-red-500">{props.errorMessage}</span>
      )}
    </div>
  );
};

interface TextInputProps extends HTMLAttributes<HTMLInputElement> {
  register: {};
}
interface TextareaInputProps extends HTMLAttributes<HTMLTextAreaElement> {
  register: {};
}

const baseInputStyles = cls(
  "placeholder:text-text-headline py-2 outline-none border-base border-t-0 border-x-0 w-full min-h-[52px] focus:border-primary bg-transparent"
);

const TextInput = ({ className, ...props }: TextInputProps) => {
  return <input type="text" className={cls(baseInputStyles, className)} {...props} {...props.register} />;
};

const TextareaInput = ({ className, ...props }: TextareaInputProps) => {
  return (
    <textarea className={cls(baseInputStyles, "min-h-[150px] resize-none", className)} {...props} {...props.register} />
  );
};
