"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Brain, Shield } from "lucide-react"

const stats = [
  { value: "500+", label: "Contracts Analyzed" },
  { value: "98%", label: "Accuracy Rate" },
  { value: "10x", label: "Faster Review" },
  { value: "24/7", label: "Availability" },
]

export function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-20 h-96 w-96 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">
              AI-Powered Legal Analysis
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            Automated Legal Document Analysis
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
            Streamline the manual process of analyzing legal documents. Extract critical clauses, paraphrase complex legal language, and understand contract implications with AI.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8 text-base"
            >
              Start Analyzing
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary gap-2 px-8 text-base"
            >
              View Documentation
            </Button>
          </div>
        </div>

        {/* Feature pills */}
        <div
          className={`mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-3 transition-all delay-300 duration-1000 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {[
            { icon: FileText, label: "Document Extraction" },
            { icon: Brain, label: "NLP Analysis" },
            { icon: Shield, label: "Clause Detection" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2"
            >
              <Icon className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground">{label}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className={`mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4 transition-all delay-500 duration-1000 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center bg-card px-6 py-8"
            >
              <span className="text-3xl font-bold text-primary">{stat.value}</span>
              <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
