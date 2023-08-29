import { TaskProps } from ".";
import { BoxGreen } from "./styled";

interface Prop {
  todo: TaskProps
}

export default function Task ({ todo }: Prop) {
  return (
    <BoxGreen>
      <p><strong>Task: </strong>{todo.description}</p>
    </BoxGreen>
  )
}