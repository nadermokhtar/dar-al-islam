import { clsx } from "clsx"

interface SpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Spinner({ size = "md", className }: SpinnerProps) {
  return (
    <div
      className={clsx(
        "animate-spin rounded-full border-2 border-gray-300 border-t-brand-green",
        {
          "h-4 w-4": size === "sm",
          "h-6 w-6": size === "md", 
          "h-8 w-8": size === "lg",
        },
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}