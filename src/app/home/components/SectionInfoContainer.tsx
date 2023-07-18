import React, { ReactNode } from "react";

const SectionInfoContainer = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-xl mb-8 flex flex-col gap-4">{children}</div>;
};

export default SectionInfoContainer;
