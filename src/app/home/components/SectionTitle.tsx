import * as C from "@/components";
import { ReactNode } from "react";

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="text-5xl font-bold mb-4">
      <C.TextGradientPrimarySecondary>
        {children}
      </C.TextGradientPrimarySecondary>
    </h3>
  );
};

export default SectionTitle;
