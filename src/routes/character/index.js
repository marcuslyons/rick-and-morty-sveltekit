export const get = async function() {
  const response = await fetch('https://rickandmortyapi.com/api/character')

  if (response.status === 200) {
    const { results } = await response.json();
    return {
      body: {
        characters: results
      }
    }
  }

  return {
    status: response.status
  }
}
