"use client"

import { useEffect, useRef, useState } from "react"
import { Terminal, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const manualSteps = [
  "Clone the repository from GitHub",
  "Navigate to the web directory",
  "Install dependencies using npm install",
  "Start the development server using npm run dev",
  "Navigate to the flask directory",
  "Install flask dependencies using pip install flask",
  "Start flask server using flask run",
  "Access the web application through your browser",
]

const dockerSteps = [
  "Install Docker on your system",
  "Navigate to the project directory",
  "Execute docker-compose up to start the application",
  "Access the web application through your browser",
]

export function GettingStarted() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"manual" | "docker">("manual")
  const [copied, setCopied] = useState(false)

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

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const commandMap = {
    manual: `git clone <repo-url>\ncd web\nnpm install\nnpm run dev\n\n# In a new terminal:\ncd flask\npip install flask\nflask run`,
    docker: `docker-compose up`,
  }

  return (
    <section
      id="getting-started"
      ref={ref}
      className="border-y border-border bg-secondary/30 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-wider text-primary uppercase">
            Getting Started
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Up and Running in Minutes
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Choose your preferred setup method and start analyzing documents right away.
          </p>
        </div>

        <div
          className={`mx-auto mt-16 max-w-4xl transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {/* Tab selector */}
          <div className="flex gap-1 rounded-xl border border-border bg-card p-1">
            <button
              onClick={() => setActiveTab("manual")}
              className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                activeTab === "manual"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Manual Setup
            </button>
            <button
              onClick={() => setActiveTab("docker")}
              className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                activeTab === "docker"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Docker Setup
            </button>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* Steps */}
            <div className="space-y-3">
              {(activeTab === "manual" ? manualSteps : dockerSteps).map(
                (step, i) => (
                  <div
                    key={`${activeTab}-${i}`}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">
                      {step}
                    </span>
                  </div>
                )
              )}
            </div>

            {/* Code block */}
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-muted-foreground">
                    Terminal
                  </span>
                </div>
                <button
                  onClick={() => handleCopy(commandMap[activeTab])}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-primary" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-foreground">
                <code>{commandMap[activeTab]}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
