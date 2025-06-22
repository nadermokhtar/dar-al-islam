"use client"

import React, { createContext, useContext, useState, useCallback } from 'react'
import { Toast, ToastState } from '@/components/ui/toast'

interface ToastContextType {
  toast: (props: Omit<ToastState, 'id'>) => void
  success: (title: string, description?: string) => void
  error: (title: string, description?: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastState[]>([])

  const addToast = useCallback((props: Omit<ToastState, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts(prev => [...prev, { id, ...props }])
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  const success = useCallback((title: string, description?: string) => {
    addToast({ variant: 'success', title, description })
  }, [addToast])

  const error = useCallback((title: string, description?: string) => {
    addToast({ variant: 'destructive', title, description })
  }, [addToast])

  return (
    <ToastContext.Provider value={{ toast: addToast, success, error }}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            variant={toast.variant}
            title={toast.title}
            description={toast.description}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}