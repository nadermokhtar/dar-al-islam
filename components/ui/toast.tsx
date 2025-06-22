"use client"

import * as React from "react"
import { clsx } from "clsx"

export interface ToastProps {
  variant?: "default" | "destructive" | "success"
  title?: string
  description?: string
  onClose?: () => void
  duration?: number
}

export function Toast({
  variant = "default",
  title,
  description,
  onClose,
  duration = 5000,
}: ToastProps) {
  const [isVisible, setIsVisible] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => onClose?.(), 300)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => onClose?.(), 300)
  }

  if (!isVisible) return null

  return (
    <div
      className={clsx(
        "fixed top-4 right-4 z-50 max-w-sm w-full bg-white border rounded-lg shadow-lg p-4 transition-all duration-300",
        {
          "border-red-200 bg-red-50": variant === "destructive",
          "border-green-200 bg-green-50": variant === "success",
          "border-gray-200": variant === "default",
        },
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}
      role="alert"
      aria-live="assertive"
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          {title && (
            <div
              className={clsx("font-semibold text-sm mb-1", {
                "text-red-800": variant === "destructive",
                "text-green-800": variant === "success",
                "text-gray-900": variant === "default",
              })}
            >
              {title}
            </div>
          )}
          {description && (
            <div
              className={clsx("text-sm", {
                "text-red-600": variant === "destructive",
                "text-green-600": variant === "success",
                "text-gray-600": variant === "default",
              })}
            >
              {description}
            </div>
          )}
        </div>
        <button
          onClick={handleClose}
          className={clsx(
            "ml-4 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-md text-lg font-medium transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400",
            {
              "text-red-500 hover:bg-red-100": variant === "destructive",
              "text-green-500 hover:bg-green-100": variant === "success",
              "text-gray-500": variant === "default",
            }
          )}
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
    </div>
  )
}

export interface ToastState {
  id: string
  variant?: "default" | "destructive" | "success"
  title?: string
  description?: string
}

export function useToast() {
  const [toasts, setToasts] = React.useState<ToastState[]>([])

  const toast = React.useCallback(
    ({ variant = "default", title, description }: Omit<ToastState, "id">) => {
      const id = Math.random().toString(36).substring(2, 9)
      setToasts((prev) => [...prev, { id, variant, title, description }])
    },
    []
  )

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  return {
    toasts,
    toast,
    removeToast,
  }
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const { toasts, removeToast } = useToast()

  return (
    <>
      {children}
      <div className="fixed top-0 right-0 z-50 p-4 space-y-2">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            variant={toast.variant}
            title={toast.title}
            description={toast.description}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </>
  )
}