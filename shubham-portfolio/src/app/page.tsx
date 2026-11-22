import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Blog from "@/components/sections/Blog";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Interests from "@/components/sections/Interests";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import { getPublishedPosts } from "@/lib/blog";

export default function HomePage() {
  const posts = getPublishedPosts();

  return (
    <main>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Interests />
      <Projects />
      <Blog posts={posts} />
      <Certificates />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
