"use client"

import { useState } from "react"
import { Download, FileSpreadsheet, FileText, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "@/hooks/use-toast"

interface DataExportButtonProps {
  dataType?: string
  className?: string
}

export function DataExportButton({ dataType = "data", className }: DataExportButtonProps) {
  const [isExporting, setIsExporting] = useState<string | null>(null)

  const handleExport = (format: string) => {
    setIsExporting(format)

    // Simulate export process
    setTimeout(() => {
      setIsExporting(null)
      toast({
        title: "Export successful",
        description: `${dataType} has been exported as ${format.toUpperCase()}`,
      })
    }, 2000)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={className}>
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Choose format</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleExport("csv")} disabled={isExporting !== null}>
          {isExporting === "csv" ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <FileSpreadsheet className="mr-2 h-4 w-4" />
          )}
          CSV
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleExport("excel")} disabled={isExporting !== null}>
          {isExporting === "excel" ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <FileSpreadsheet className="mr-2 h-4 w-4" />
          )}
          Excel
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleExport("pdf")} disabled={isExporting !== null}>
          {isExporting === "pdf" ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <FileText className="mr-2 h-4 w-4" />
          )}
          PDF
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
