import { AllToDo } from "."
import Event from "./event"
import Reminder from "./reminder"
import Task from "./task"

interface ItemProp {
  todo: AllToDo
}

export default function Item ({ todo }: ItemProp) {

  switch (todo.type) {
    case "event": return <Event todo={todo} />
    case "reminder": return <Reminder todo={todo} />
    case "task":
    default: return <Task todo={todo} />
  }
}