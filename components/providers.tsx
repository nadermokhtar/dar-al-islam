"use client"

import { ToastProvider } from "@/lib/toast-context"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      {children}
    </ToastProvider>
  )
}