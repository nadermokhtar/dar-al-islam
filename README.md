This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Dar al Islam Boston - Modern Next.js Website Documentation

## Overview
This document outlines the architecture for a modern Next.js application for Dar al-Islam of Boston
. The project uses **Next.js 15** with the App Router, TypeScript for type safety, and Tailwind CSS for styling, following a light blue, Islamic green, and white color theme.

## Project Structure

```
/dar-al-islam-boston
├── /app
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── khutba-evaluation/
│   │   └── page.tsx
│   ├── directions/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── resources/
│   │   └── page.tsx
│   ├── mailing-list/
│   │   └── page.tsx
│   └── donations/
│       └── page.tsx
├── /components
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── card.tsx
│   ├── navigation/
│   │   ├── header.tsx
│   │   └── footer.tsx
│   └── forms/
│       ├── contact-form.tsx
│       └── donation-form.tsx
├── /lib
│   ├── utils.ts
│   └── constants.ts
├── /public
│   └── assets/
├── /styles
│   └── globals.css
└── /types
    └── index.ts
```

## Tech Stack

### Core Technologies
- **Next.js 14**: Latest version with App Router
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For styling with utility classes
- **shadcn/ui**: For pre-built accessible components

### State Management & Data Fetching
- **React Server Components**: For efficient server-side rendering
- **TanStack Query**: For client-side data fetching
- **Zod**: For schema validation

### Forms & Validation
- **React Hook Form**: For form handling
- **Zod**: For form validation

### Authentication & Payments
- **NextAuth.js**: For authentication
- **Stripe**: For donation processing

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting

## Theme Configuration

### Tailwind Configuration
```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#ADD8E6',
        'brand-green': '#008000',
        'brand-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
export default config
```

## Key Components

### Layout Component
```typescript
// app/layout.tsx
import { Inter } from 'next/font/google'
import Header from '@/components/navigation/header'
import Footer from '@/components/navigation/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

## Pages Implementation

### Home Page
```typescript
// app/page.tsx
export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="hero min-h-screen">
        {/* Hero content */}
      </section>
      <section className="features">
        {/* Features content */}
      </section>
    </div>
  )
}
```

## API Routes

### Contact Form
```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const validatedData = contactSchema.parse(body)
    // Process contact form submission
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid submission' },
      { status: 400 }
    )
  }
}
```

## Data Fetching

### Server Components
```typescript
// app/services/page.tsx
async function getServices() {
  // Fetch services data
}

export default async function ServicesPage() {
  const services = await getServices()
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  )
}
```

## Forms Implementation

### Donation Form
```typescript
// components/forms/donation-form.tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const donationSchema = z.object({
  amount: z.number().min(1),
  recurring: z.boolean(),
})

export function DonationForm() {
  const form = useForm({
    resolver: zodResolver(donationSchema),
  })
  
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  )
}
```

## Deployment & Optimization

### Performance Optimization
- Use Next.js Image component for optimized images
- Implement loading states and suspense boundaries
- Configure dynamic imports for code splitting

### SEO
```typescript
// app/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dar al Islam Boston',
  description: 'Your community center for Islamic education and worship',
}
```

### Environment Variables
```plaintext
# .env.local
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
```

## Testing Setup

### Jest Configuration
```typescript
// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
```

## Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watch",
    "prepare": "husky install"
  }
}
```

This documentation provides a modern approach to building a Next.js application with current best practices and tooling. Let me know if you'd like me to expand on any section or provide additional implementation details!