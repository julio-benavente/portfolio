"use client";

import React from "react";
import * as C from "@/components";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-primaryBg">
      <div className="mx-6 py-16">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-3xl text-center">Julio Benavente</h3>
          <p className="text-lg text-center">
            This website has been created based on the template Meelo by{" "}
            <a
              href="https://webflow.com/templates/designers/elemis"
              target="_blank"
            >
              elemis
            </a>
          </p>
          <div className="flex flex-row gap-4">
            <C.ButtonIcon
              icon={GitHub}
              as="a"
              href="https://github.com/julio-benavente"
            />
            <C.ButtonIcon
              icon={LinkedIn}
              as="a"
              href="linkedin.com/in/julio-benavente-504ba9119/"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
