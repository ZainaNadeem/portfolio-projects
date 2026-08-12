import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <div className="mx-auto w-full max-w-[1180px] px-6 py-12 lg:py-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start lg:gap-10">
            <Hero />
            <div className="lg:pt-5">
          <Projects />
        </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}