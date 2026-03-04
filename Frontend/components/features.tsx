"use client"

import { useEffect, useRef, useState } from "react"
import {
  FileSearch,
  BookOpen,
  FileText,
  Repeat,
  BarChart3,
  Monitor,
  Server,
  Container,
} from "lucide-react"

const features = [
  {
    icon: FileSearch,
    title: "Automated Document Analysis",
    description:
      "Streamlines the manual process of analyzing legal documents, saving time and effort for legal professionals.",
  },
  {
    icon: BookOpen,
    title: "Reading Comprehension Model",
    description:
      "A model based on the SQuAD dataset that allows users to extract information directly from legal documents.",
  },
  {
    icon: FileText,
    title: "CUAD Dataset",
    description:
      "A custom dataset of 500 contracts in Q&A format addressing critical clauses commonly asked by lawyers.",
  },
  {
    icon: Repeat,
    title: "Paraphrasing Model",
    description:
      "Based on the T5-base model, utilizing Quora, SQuAD 2.0, and CNN datasets to simplify complex legal language.",
  },
  {
    icon: BarChart3,
    title: "Sentiment Analysis",
    description:
      "Powered by TextBlob, provides insights into the impact and implications of contract clauses.",
  },
  {
    icon: Monitor,
    title: "User-Friendly Interface",
    description:
      "Built with Next.js for a seamless and intuitive user experience when analyzing documents.",
  },
  {
    icon: Server,
    title: "Flask Server Integration",
    description:
      "Seamlessly connects the web interface to ML models through a Flask server for efficient processing.",
  },
  {
    icon: Container,
    title: "Docker Containerization",
    description:
      "Simplified deployment through Docker. Run the entire application effortlessly with Docker Compose.",
  },
]

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0]
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
      className={`group relative rounded-2xl border border-border bg-card p-6 transition-all duration-700 hover:border-primary/30 hover:bg-secondary/50 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
        <feature.icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {feature.description}
      </p>
    </div>
  )
}

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-wider text-primary uppercase">
            Key Features
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need for Legal Document Analysis
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            A comprehensive suite of AI-powered tools designed to transform how legal professionals review and understand contracts.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
