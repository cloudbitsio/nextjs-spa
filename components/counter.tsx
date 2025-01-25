"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center gap-4">
      <Button onClick={() => setCount(count - 1)}>-</Button>
      <span className="text-2xl">{count}</span>
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </div>
  )
}

