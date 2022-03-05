<script>
  export let episode
</script>

<svelte:head>
  <title>{episode}</title>
</svelte:head>

<section>
  <a href="/episode">Back to episodes</a>
  <!-- <pre>{JSON.stringify(episode, null, 2)}</pre> -->

  <div>
    <h1>{episode.name}</h1>
    <h3>{episode.episode}</h3>
    <h3>{episode.air_date}</h3>
  </div>

  <div>
    <h3>Characters</h3>
    <ul>
      {#each episode.characters as character}
        <li>{character}</li>
      {/each}
    </ul>
  </div>
</section>