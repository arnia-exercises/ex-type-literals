import { ReminderProps } from ".";
import { Box } from "./styled";

type Props = {
  todo: ReminderProps
}

export default function Reminder ({ todo }: Props) {
  return (
    <Box>
      <p><strong>Reminder: </strong>{todo.description}</p>
      <p><strong>Date: {todo.date.toLocaleDateString()}</strong></p>
    </Box>
  )
}