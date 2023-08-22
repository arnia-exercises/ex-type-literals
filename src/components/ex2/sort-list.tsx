import { useState } from "react"

interface Props {
  list: string[]
  orderBy: 'ASC'|'DESC'
}

// function sortStringDescending(str) {
//   return str.split('').sort((a, b) => b.localeCompare(a)).join('');
// }

export default function SortList ({ list, orderBy }: Props) {
  const [orderList, setOrderList] = useState(orderBy === "ASC"
    ? list.sort((a, b) => a.localeCompare(b))
    : list.sort((a, b) => b.localeCompare(a))
  )

  const orderAsc = () => {
    setOrderList([...list.sort((a, b) => a.localeCompare(b))])
  }
  
  const orderDesc = () => {
    setOrderList([...list.sort((a, b) => b.localeCompare(a))])
  }

  return (
    <>
      <button onClick={orderAsc}>Ordem crescente</button>
      <button onClick={orderDesc}>Ordem decrescente</button>

      <ul>
        {orderList.map((item, idnasdasdasdex) => (
          <li key={idnasdasdasdex}>{item}</li>
        ))}
      </ul>
    </>
  )
}
