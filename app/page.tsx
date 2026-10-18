import type { Metadata } from "next";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { contact, profileSummary, projects, socialLinks } from "./data/portfolio";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const profile = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://kbasiri.com/#profile",
  url: "https://kbasiri.com/",
  name: "Khalifeh Basiri - Software Developer",
  mainEntity: {
    "@type": "Person",
    "@id": "https://kbasiri.com/#person",
    name: "Khalifeh Basiri",
    url: "https://kbasiri.com/",
    jobTitle: "Software Developer",
    description: profileSummary,
    homeLocation: { "@type": "Place", name: contact.location },
    sameAs: socialLinks.map((link) => link.href),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profile).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main>
        <Hero />
        <Projects projects={projects} />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
