import { ChangeEvent, useState } from "react"

type Gender = 'male' | 'female' | 'other' | ''

export default function Ex1Form () {
  const [name, setName] = useState<string>('')
  const [gender, setGender] = useState<Gender>('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value as Gender)
  }

  return (
    <div>

      {Boolean(gender) && <p>{name} is a: {gender}</p>}

      {/* {gender ? <p>Você selecionou o gênero: {gender}</p> : null}
      {gender && <p>Você selecionou o gênero: {gender}</p>}
      {!!gender && <p>Você selecionou o gênero: {gender}</p>}
      {gender !== '' && <p>Você selecionou o gênero: {gender}</p>} */}
      
      <form>

        <input type="text" name="name" onChange={handleInputChange} />

        <select name="gender" onChange={handleSelectChange}>
          <option value="" selected disabled>Select a gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </form>
    </div>
  )
}