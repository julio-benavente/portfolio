import { site } from "@/data/site";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container-narrow text-base text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
