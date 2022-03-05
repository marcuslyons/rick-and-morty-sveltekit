export const get = async function({ params }) {
  const response = await fetch(`https://rickandmortyapi.com/api/location/${params.id}`)

  if (response.status === 200) {
    const data = await response.json()

    return {
      body: {
        location: data
      }
    }
  }

  return {
    status: response.status
  }
}