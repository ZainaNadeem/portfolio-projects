import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Research from "@/components/Research";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <Hero />

        <Projects />

        <section
          id="experience"
          className="border-t border-border-subtle bg-background"
        >
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,8fr)_minmax(0,2fr)] lg:gap-10 xl:gap-12">
              <Experience />
              <Skills />
            </div>
          </div>
        </section>

        <Research />
      </main>

      <Footer />
    </>
  );
}