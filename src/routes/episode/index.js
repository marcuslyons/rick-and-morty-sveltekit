export const get = async function() {
  const response = await fetch('https://rickandmortyapi.com/api/episode')

  if (response.status === 200) {
    const { results } = await response.json()

    return {
      body: {
        episodes: results
      }
    }
  }

  return {
    status: response.status
  }
}
