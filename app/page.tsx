import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Counter } from "@/components/counter"

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Next.js SPA</h1>
      <p className="mb-4">This is a statically generated single page application.</p>
      <div className="mb-4">
        <Counter />
      </div>
      <Button asChild className="mr-2">
        <Link href="/about">Go to About Page</Link>
      </Button>
    </div>
  )
}

