import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Blog from "@/components/sections/Blog";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Moments from "@/components/sections/Moments";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Research from "@/components/sections/Research";
import Volunteering from "@/components/sections/Volunteering";
import Projects from "@/components/sections/Projects";
import QuoteBar from "@/components/sections/QuoteBar";
import Skills from "@/components/sections/Skills";
import { getPublishedPosts } from "@/lib/blog";

export default function HomePage() {
  const posts = getPublishedPosts();

  return (
    <main>
      <Navbar />
      <QuoteBar />
      <Hero />
      <About />
      <Moments />
      <Experience />
      <Education />
      <Research />
      <Projects />
      <Volunteering />
      <Journey />
      <Blog posts={posts} />
      <Certificates />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
