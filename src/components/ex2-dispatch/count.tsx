import { useState } from "react";
import Decrement from "./decrement";
import Increment from "./increment";

export default function Count () {
  const [contador, setContador] = useState(10)

  return (
    <div>
      <p>CONTADOR: {contador}</p>

      <Increment setCount={setContador} />
      <Decrement set={setContador} />
    </div>
    
  )
}