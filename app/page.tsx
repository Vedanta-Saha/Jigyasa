import Hero from "@/components/hero"
import Features from "@/components/features"
import About from "@/components/about"
import CTA from "@/components/cta"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

