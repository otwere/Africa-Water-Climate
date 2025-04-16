import Link from "next/link"

export function DashboardFooter() {
  return (
    <footer className="border-t bg-white dark:bg-slate-900">
      <div className="container flex flex-col items-center justify-between gap-4 py-4 md:h-14 md:flex-row md:py-0">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} AfricaWaterData. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          <Link href="/help" className="hover:underline">
            Help
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
