"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { FancyButton } from "@/components/ui/fancy-button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function PricingSection() {
  const [annual, setAnnual] = useState(true)

  const plans = [
    {
      name: "Basic",
      description: "For small organizations and research teams",
      price: annual ? "$99" : "$12",
      period: annual ? "/year" : "/month",
      features: ["Data collection forms", "Basic analytics", "5 team members", "1GB storage", "Email support"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "For medium-sized organizations and government agencies",
      price: annual ? "$499" : "$49",
      period: annual ? "/year" : "/month",
      features: [
        "Advanced data collection",
        "Interactive dashboards",
        "20 team members",
        "10GB storage",
        "Priority support",
        "API access",
        "Custom reports",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      price: "Custom",
      period: "",
      features: [
        "Unlimited data collection",
        "Advanced analytics & AI",
        "Unlimited team members",
        "100GB storage",
        "24/7 dedicated support",
        "Full API access",
        "Custom integrations",
        "On-premise deployment",
        "Training & onboarding",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-16 md:py-24 scroll-mt-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 mb-4">
            Pricing
          </span>
          <h2 className="text-3xl font-bold tracking-tight">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-muted-foreground">Choose the plan that's right for your organization</p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Label htmlFor="billing-toggle" className={annual ? "text-muted-foreground" : "font-medium"}>
              Monthly
            </Label>
            <Switch id="billing-toggle" checked={annual} onCheckedChange={setAnnual} />
            <Label htmlFor="billing-toggle" className={!annual ? "text-muted-foreground" : "font-medium"}>
              Annual <span className="ml-1 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">Save 20%</span>
            </Label>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl border ${
                plan.popular ? "border-blue-200 bg-blue-50/50 dark:bg-blue-900/20" : "bg-white/70 dark:bg-gray-800/50"
              } p-6 shadow-lg backdrop-blur-sm`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <FancyButton
                className="w-full"
                gradient={plan.popular}
                variant={plan.popular ? "default" : "outline"}
                asChild
              >
                <Link href={plan.name === "Enterprise" ? "/contact" : "/register"}>{plan.cta}</Link>
              </FancyButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
