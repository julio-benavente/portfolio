import { site } from "@/data/site";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container-narrow flex items-center justify-between text-base text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex gap-5">
          <a href={site.github} target="_blank" rel="noreferrer" className="nav-link">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="nav-link">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
