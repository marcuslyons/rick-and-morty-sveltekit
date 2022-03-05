export const get = async function() {
  const response = await fetch('https://rickandmortyapi.com/api/location')

  if (response.status === 200) {
    const { results } = await response.json()

    return {
      body: {
        locations: results
      }
    }
  }

  return {
    status: response.status
  }
}