// Shared by the contact form (browser) and the email API (server), so both apply the same rules.
// Every validator returns true when the value is valid, or the message to show when it is not.

export const LIMITS = {
  nameMin: 2,
  nameMax: 100,
  emailMax: 254,
  messageMin: 10,
  messageMax: 5000,
};

// Practical version of the email standard: a local part of at most 64 characters with no leading,
// trailing or doubled dots, and a domain made of labels (letters, digits, inner hyphens) ending in a TLD.
const emailPattern =
  /^(?=.{1,64}@)[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/;

// Common typos of popular providers, so a mistyped address is caught before it bounces
const domainTypos: Record<string, string> = {
  "gmial.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gamil.com": "gmail.com",
  "gmail.con": "gmail.com",
  "gmail.cm": "gmail.com",
  "hotmial.com": "hotmail.com",
  "hotmail.con": "hotmail.com",
  "yaho.com": "yahoo.com",
  "yahoo.con": "yahoo.com",
  "outlok.com": "outlook.com",
  "outlook.con": "outlook.com",
};

const hasControlCharacters = (value: string) => /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(value);

export const validateName = (input: string): true | string => {
  const value = input.trim();

  if (!value) return "Please enter your name.";
  if (value.length < LIMITS.nameMin) return `Your name must be at least ${LIMITS.nameMin} characters.`;
  if (value.length > LIMITS.nameMax) return `Your name must be ${LIMITS.nameMax} characters or fewer.`;
  // Needs at least one letter, and no markup or control characters
  if (!/\p{L}/u.test(value) || /[<>]/.test(value) || hasControlCharacters(value)) {
    return "Please enter a valid name.";
  }

  return true;
};

export const validateEmail = (input: string): true | string => {
  const value = input.trim();

  if (!value) return "Please enter your email address.";
  if (value.length > LIMITS.emailMax) return "That email address is too long.";
  if (!emailPattern.test(value)) return "Please enter a valid email address, like name@example.com.";

  const [local, domain] = value.split("@");
  const suggestion = domainTypos[domain.toLowerCase()];
  if (suggestion) return `Did you mean ${local}@${suggestion}?`;

  return true;
};

export const validateMessage = (input: string): true | string => {
  const value = input.trim();

  if (!value) return "Please enter a message.";
  if (value.length < LIMITS.messageMin) return `Your message must be at least ${LIMITS.messageMin} characters.`;
  if (value.length > LIMITS.messageMax) return `Your message must be ${LIMITS.messageMax} characters or fewer.`;
  if (hasControlCharacters(value)) return "Your message contains characters that can't be sent.";

  return true;
};
