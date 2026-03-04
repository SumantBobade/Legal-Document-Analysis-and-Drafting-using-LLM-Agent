import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          </div>
          <div className="relative">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Transform Your Legal Workflow?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Start analyzing legal documents with AI-powered precision today. Open-source and ready to deploy.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-primary px-8 text-base text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/login">
                  Get Started Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border px-8 text-base text-foreground hover:bg-secondary"
              >
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
