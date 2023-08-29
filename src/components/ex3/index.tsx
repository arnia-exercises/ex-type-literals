import { Contact } from "./contact";

export default function Ex3 () {
  const people = {
    email: "marcos.azevedo@email.com",
    name: "Marcos",
    lastname: "Azevedo",
    age: 34,
    officer: 'Full Stack',
    gender: 'male',
    phone: '(11) 12313-2323'
  }

  return (
    <Contact
      {...people}
      // email={email}
      // name={name}
      // lastname={lastname}
      // age={age}
    />
  )
}
