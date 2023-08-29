import { EventProps } from ".";
import { BoxYellow } from "./styled";

interface Prop {
  todo: EventProps
}

export default function Event ({ todo }: Prop) {
  return (
    <BoxYellow>
      <p><strong>Event: </strong>{todo.description}</p>
      <p><strong>Place: </strong>{todo.local}</p>
    </BoxYellow>
  )
}