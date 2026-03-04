import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { TechStack } from "@/components/tech-stack"
import { GettingStarted } from "@/components/getting-started"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TechStack />
      <GettingStarted />
      <CTA />
      <Footer />
    </main>
  )
}
