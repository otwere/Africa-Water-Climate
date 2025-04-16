import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
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
              "This platform has revolutionized how we manage water resources and respond to climate challenges across
              our region."
            </p>
            <footer className="text-sm text-blue-100">Dr. Fatima Nkosi, Water Resources Director</footer>
          </blockquote>
        </div>
      </div>

      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] lg:p-8">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
        </div>

        <LoginForm />

        <p className="px-8 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link href="/register" className="underline underline-offset-4 hover:text-primary">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
