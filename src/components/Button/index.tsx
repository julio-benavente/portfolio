"use client";

import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";
import clsx from "clsx";
import cls from "@/helpers/cls";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }

  interface ButtonClasses {}
}

interface ButtonInterface extends ButtonProps {}

const Button = (props: ButtonInterface) => {
  return (
    <MuiButton
      type="button"
      variant="contained"
      color="primary"
      classes={{
        root: cls(
          "shadow-none transition-none border-primary font-bold",
          "hover:shadow-none"
        ),
        containedPrimary: cls("bg-primary", "hover:bg-primary-600 text-white"),
        containedSecondary: cls(
          "bg-secondary border-secondary",
          "hover:bg-secondary-600 hover:border-secondary-600"
        ),
        outlinedSecondary: cls(
          "text-secondary  bg-transparent border-secondary",
          "hover:border-secondary-600 hover:bg-transparent hover:text-secondary-600 "
        ),
        textPrimary: cls(
          "text-primary",
          "hover:bg-transparent hover:text-primary-600 "
        ),
        textSecondary: cls(
          "text-secondary",
          "hover:bg-transparent hover:text-secondary-600 "
        ),
      }}
      disableRipple
      {...props}
    >
      {props.children}
    </MuiButton>
  );
};

export default Button;
