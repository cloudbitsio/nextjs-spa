import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">About Page</h1>
      <p className="mb-4">This is the about page of our SSG SPA.</p>
      <Button asChild>
        <Link href="/">Go back to Home</Link>
      </Button>
    </div>
  )
}

