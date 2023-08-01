import React, { HTMLAttributes } from "react";
import * as C from "@/components";
import cls from "@/helpers/cls";

const index = () => {
  return (
    <div id="contact" className="relative bg-primaryBg">
      <div className="absolute top-0 left-0 w-full h-80 bg-white base-border border-t-0 border-x-0"></div>
      <div className="relative mx-6 z-10">
        <div className="p-10 base-border rounded-lg bg-white">
          <div className="flex flex-col items-center mb-12">
            <C.Badge className="mb-7">Contact</C.Badge>

            <h2 className="text-4xl text-center">
              Got a project in mind? Let's get in touch.
            </h2>
          </div>

          <form className="grid grid-cols-1 gap-10">
            <TextInput placeholder="What's your name? *" />
            <TextInput placeholder="What's your email? *" />
            <TextareaInput placeholder="Tell me about your project" />
            <C.Button className="max-w-fit mx-auto">Send</C.Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;

interface TextInputProps extends HTMLAttributes<HTMLInputElement> {}
interface TextareaInputProps extends HTMLAttributes<HTMLTextAreaElement> {}

const baseInputStyles = cls(
  "placeholder:text-text-headline py-2 outline-none base-border border-t-0 border-x-0 w-full min-h-[52px]"
);

const TextInput = (props: TextInputProps) => {
  return <input type="text" className={baseInputStyles} {...props} />;
};

const TextareaInput = (props: TextareaInputProps) => {
  return (
    <textarea
      className={cls(baseInputStyles, "min-h-[150px] resize-none")}
      {...props}
    />
  );
};
