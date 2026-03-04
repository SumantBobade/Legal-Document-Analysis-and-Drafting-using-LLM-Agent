"use client"

import { useEffect, useRef, useState } from "react"
import { Upload, Cpu, FileOutput, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Document",
    description:
      "Upload your legal contract or document in supported formats. The system accepts a wide range of legal document types.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Processing",
    description:
      "Our NLP models analyze the document, extracting clauses, identifying key terms, and running sentiment analysis.",
  },
  {
    icon: FileOutput,
    step: "03",
    title: "Extract & Paraphrase",
    description:
      "Critical clauses are extracted and paraphrased into plain language using our T5-based model for easy comprehension.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Review Results",
    description:
      "Review the analysis results including clause identification, sentiment scores, and paraphrased summaries.",
  },
]

function StepCard({
  item,
  index,
}: {
  item: (typeof steps)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center text-center transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative mb-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card">
          <item.icon className="h-8 w-8 text-primary" />
        </div>
        <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
          {item.step}
        </span>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
      <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-border bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-wider text-primary uppercase">
            How It Works
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From Document to Insights in Minutes
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            A simple four-step process to analyze any legal document with AI-powered precision.
          </p>
        </div>

        {/* Connection line on larger screens */}
        <div className="relative mt-20">
          <div className="absolute top-10 right-[12.5%] left-[12.5%] hidden h-px bg-border lg:block" />
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, i) => (
              <StepCard key={item.step} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
