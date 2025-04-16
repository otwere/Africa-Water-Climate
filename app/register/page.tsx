import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { RegisterForm } from "@/components/auth/register-form"

export default function RegisterPage() {
  return (
    <div className="container relative flex min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/"
        className="absolute left-4 top-4 inline-flex items-center text-sm font-medium text-muted-foreground md:left-8 md:top-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to home
      </Link>

      <div className="relative hidden h-full flex-col bg-muted p-10 lg:flex">
        <div className="absolute inset-0 bg-blue-900">
          <img
            src="/placeholder.svg?height=1080&width=1920&text=Water+Management+Platform"
            alt="Authentication background"
            className="h-full w-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 flex items-center text-lg font-medium text-white">AfricaWaterData</div>
        <div className="relative z-10 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg text-white">
              "Join organizations across Africa using data to transform water management and climate resilience."
            </p>
            <footer className="text-sm text-blue-100">AfricaWaterData Platform</footer>
          </blockquote>
        </div>
      </div>

      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] lg:p-8">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">Enter your information to get started with AfricaWaterData</p>
        </div>

        <RegisterForm />

        <p className="px-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="underline underline-offset-4 hover:text-primary">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
