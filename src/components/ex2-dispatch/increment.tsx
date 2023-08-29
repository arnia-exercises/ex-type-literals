import { Dispatch, SetStateAction } from "react"

type Props = {
  setCount: Dispatch<SetStateAction<number>>
}

export default function Increment ({ setCount }: Props) {
  return (
    <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
  )  
}
