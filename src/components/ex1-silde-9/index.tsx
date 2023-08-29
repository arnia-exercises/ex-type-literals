// Lista de Itens

import ItemList from "./item-list"

// Crie um aplicativo de lista de itens onde cada item pode ser do tipo "tarefa", "evento" ou "lembrete". Você deve renderizar cada item de acordo com o seu tipo, aplicando estilos diferentes e exibindo informações relevantes.

// Requisitos:

// Defina três tipos de item: "tarefa", "evento" e "lembrete", cada um com propriedades específicas.
// Crie um componente chamado Item que recebe um item como prop e renderiza-o de acordo com seu tipo.
// Utilize Styled Components para aplicar estilos diferentes para cada tipo de item.
// Crie um componente ItemList que recebe uma lista de itens e renderiza a lista utilizando o componente Item.

export type TaskProps = {
  id: number
  description: string
  checked: boolean
  type: 'task'
}

export type EventProps = Omit<TaskProps, 'type'> & {
  type: 'event'
  local: string
}

export type ReminderProps = Omit<TaskProps, 'type'> & {
  type: 'reminder'
  date: Date
}

export type AllToDo = TaskProps | EventProps | ReminderProps

export default function Ex1Slide9 () {
  const todos: AllToDo[] = [
    {
      id: 1,
      description: 'lorem ipsum dolor amet',
      type: 'task',
      checked: true
    },
    {
      id: 2,
      description: 'mussum lipsum',
      type: 'event',
      checked: true,
      local: 'lorm upsum'
    },
    {
      id: 3,
      description: 'vallar morgullis',
      type: 'reminder',
      checked: true,
      date: new Date()
    },
    {
      id: 4,
      description: 'lavar umas roupa',
      type: 'task',
      checked: false
    },
    {
      id: 5,
      description: 'Show da Sandy A Diva',
      type: 'reminder',
      checked: false,
      date: new Date()
    },
  ]

  return (
    <ItemList todos={todos} />
  )
}
