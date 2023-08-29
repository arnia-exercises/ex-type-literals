import { AllToDo } from "."
import Item from "./item"

interface ItemListProps {
  todos: AllToDo[]
}

export default function ItemList ({ todos }: ItemListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <Item
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  )
}