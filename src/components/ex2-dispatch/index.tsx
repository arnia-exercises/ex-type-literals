import { useState } from "react"

import Increment from "./increment"
import Decrement from "./decrement"

export default function Ex2Dispatch () {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <h1>COUNT: {count}</h1>
      <Increment setCount={setCount} />
      <Decrement set={setCount} />
    </div>
  )
}
