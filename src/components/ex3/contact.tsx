type Props = {
  name: string
  lastname: string
  email: string
  age?: number
}

export function Contact (props: Props) {
  const {
    email,
    lastname,
    name,
    age
  } = props

  return (
    <ul>
      {/* {Object.keys(props).map(item => (
        <li key={item}><strong>{item}: </strong>{props[item]}</li>
      ))} */}

      <li><strong>Name: </strong>{name}</li>
      <li><strong>Lastname: </strong>{lastname}</li>
      <li><strong>Email: </strong>{email}</li>
      {Boolean(age) && <li><strong>Age: </strong>{age}</li>}
    </ul>
  )
}
