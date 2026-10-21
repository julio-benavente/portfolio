"use client";

import { useState } from "react";
import { Check, Copy } from "@/ui/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  // Both labels share one grid cell, so the button always keeps the width of the longer one
  const label = "col-start-1 row-start-1 inline-flex items-center justify-center gap-2";

  return (
    <Button variant="secondary" onClick={copy} aria-live="polite">
      <span className="grid">
        <span className={cn(label, copied && "invisible")}>
          <Copy />
          Copy email
        </span>
        <span className={cn(label, !copied && "invisible")}>
          <Check />
          Copied!
        </span>
      </span>
    </Button>
  );
};

export default CopyEmail;
