import { site } from "@/data/site";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container-narrow flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-base text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <a href={site.resume} download className="link-subtle">
          Download resume
        </a>
      </div>
    </footer>
  );
};

export default Footer;
