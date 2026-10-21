import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container-narrow py-40">
      <p className="text-base text-muted-foreground">404</p>
      <h1 className="mt-2 text-4xl font-medium leading-tight tracking-tight">Page not found</h1>
      <p className="mt-4 text-base text-muted-foreground">
        The page you are looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className={buttonVariants({ size: "lg", className: "mt-8" })}>
        Back to home
      </Link>
    </main>
  );
}
