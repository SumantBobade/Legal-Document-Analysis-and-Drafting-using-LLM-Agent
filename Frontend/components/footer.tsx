import Link from "next/link"
import { Scale } from "lucide-react"

const footerLinks = {
  Platform: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Technology", href: "#technology" },
    { label: "Getting Started", href: "#getting-started" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "GitHub Repository", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Docker Hub", href: "#" },
  ],
  Research: [
    { label: "SQuAD Dataset", href: "#" },
    { label: "CUAD Dataset", href: "#" },
    { label: "T5-base Model", href: "#" },
    { label: "Publications", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Scale className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                LegalMind AI
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              AI-powered platform for automated legal document analysis, clause extraction, and sentiment analysis.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground">{category}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            Built with Next.js, Flask, and NLP. Open-source project.
          </p>
          <p className="text-sm text-muted-foreground">
            {'© 2026 LegalMind AI. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
