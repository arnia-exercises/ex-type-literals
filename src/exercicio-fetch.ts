type CatFact = {
  fact: string
  length: number
}

async function getCatFact (): Promise<CatFact> {
  const response = await fetch('https://catfact.ninja/fact')
  const json = await response.json()
  return json
}

type BoredApi = {
  activity: string
  type: string
  participants: number
  price: number
  link?: string
  key: string
  accessibility: number
}

async function getBoredApi (): Promise<BoredApi> {
  const response = await fetch('https://www.boredapi.com/api/activity')
  const json = await response.json()
  return json
}

type Universities = {
  country: string
  domains: string[]
  alpha_two_code: string
  "state-province"?: string
  web_pages: string[]
  name: string
}[]

async function getUniversities(): Promise<Universities> {
  try {
    const response = await fetch('http://universities.hipolabs.com/search?country=Brazil')
    return response.json()
  } catch (err) {
    console.log('Nossos servidores estão indisposníveis, tente novamente mais tarde.')
    throw new Error('Nossos servidores estão indisposníveis, tente novamente mais tarde.')
  }
}



const run = async () => {
  // const catFact = await getCatFact()
  // console.log(catFact)

  // const boredApi = await getBoredApi()
  // console.log(boredApi)

  const universities = await getUniversities()
  console.log(universities)
}
run()


