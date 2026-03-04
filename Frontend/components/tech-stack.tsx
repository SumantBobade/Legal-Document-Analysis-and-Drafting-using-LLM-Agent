"use client"

import { useEffect, useRef, useState } from "react"

const technologies = [
  {
    name: "Next.js",
    category: "Frontend",
    description: "React framework for building the user interface with server-side rendering.",
  },
  {
    name: "Flask",
    category: "Backend",
    description: "Python micro web framework connecting the UI with ML models.",
  },
  {
    name: "SQuAD Dataset",
    category: "Dataset",
    description: "Stanford dataset used for developing and evaluating the reading comprehension model.",
  },
  {
    name: "CUAD Dataset",
    category: "Dataset",
    description: "500 contracts in Q&A format addressing critical clauses in legal documents.",
  },
  {
    name: "T5-base Model",
    category: "NLP Model",
    description: "Transformer model for generating high-quality paraphrases of legal text.",
  },
  {
    name: "TextBlob",
    category: "NLP Library",
    description: "Python library for sentiment analysis of contract clause implications.",
  },
  {
    name: "NLP",
    category: "Core Technology",
    description: "Natural Language Processing for information extraction and paraphrase generation.",
  },
  {
    name: "Docker",
    category: "DevOps",
    description: "Containerization for simplified deployment with Docker Compose.",
  },
]

function TechCard({
  tech,
  index,
}: {
  tech: (typeof technologies)[0]
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
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-700 hover:border-primary/30 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-mono text-sm font-bold text-primary">
        {tech.name.slice(0, 2).toUpperCase()}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-foreground">{tech.name}</h3>
          <span className="rounded-full border border-border bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
            {tech.category}
          </span>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {tech.description}
        </p>
      </div>
    </div>
  )
}

export function TechStack() {
  return (
    <section id="technology" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-wider text-primary uppercase">
            Technology Stack
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built on Proven Technologies
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            A robust stack combining modern web frameworks with state-of-the-art NLP models and datasets.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {technologies.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
