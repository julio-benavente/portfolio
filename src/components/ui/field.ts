/** Shared look and interaction states for text inputs and textareas. */
export const fieldStyles = [
  // base
  "flex w-full rounded-none border border-input bg-transparent px-3 text-base transition-colors duration-200",
  "placeholder:text-muted-foreground",
  // hover
  "hover:border-foreground/60",
  // focus: border (the ring comes from the global :focus-visible rule)
  "focus-visible:border-foreground",
  // active (pressed / typing)
  "active:border-foreground",
  // invalid (set aria-invalid on the element)
  "aria-[invalid=true]:border-destructive aria-[invalid=true]:focus-visible:ring-destructive",
  // disabled
  "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-input",
].join(" ");
