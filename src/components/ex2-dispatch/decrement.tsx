import { Dispatch, SetStateAction } from "react"

type Props = {
  set: Dispatch<SetStateAction<number>>
}

export default function Decrement ({ set }: Props) {
  return (
    <button onClick={() => set(prev => prev - 1)}>Decrement</button>
  )
}
