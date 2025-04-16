"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { FancyButton } from "@/components/ui/fancy-button"
import { CheckCircle } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically send the email to your newsletter service
      setSubmitted(true)
    }
  }

  return (
    <section className="bg-blue-50 dark:bg-blue-950/30 py-16">
      <div className="container">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight">Stay Updated on Water & Climate Insights</h2>
          <p className="mt-4 text-muted-foreground">
            Join our newsletter to receive the latest updates, research findings, and best practices
          </p>

          {submitted ? (
            <div className="mt-8 flex flex-col items-center justify-center">
              <div className="rounded-full bg-green-100 p-3">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium">Thank you for subscribing!</h3>
              <p className="mt-2 text-muted-foreground">
                You'll start receiving our newsletter with the latest water and climate insights.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FancyButton type="submit" gradient className="h-12 px-8">
                Subscribe
              </FancyButton>
            </form>
          )}

          <p className="mt-4 text-xs text-muted-foreground">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
