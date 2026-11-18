import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer page-wrap">
      <a href="#home" className="brand" aria-label="Back to home">
        {profile.initials}<span>.</span>
      </a>
      <p>DESIGNED TO SHOWCASE ENGINEERING &amp; IDEAS.</p>
      <a href="#home" className="back-top">
        BACK TO TOP ↑
      </a>
      <span className="copyright">
        © {new Date().getFullYear()} {profile.name}
      </span>
    </footer>
  );
}
