<script>
  export let episodes
</script>

<svelte:head>
  <title>Episodes</title>
</svelte:head>

<section>
  <a href="/">Back Home</a>
  <h1>Episodes</h1>
  <!-- <pre>{JSON.stringify(episodes, null, 2)}</pre> -->
  <ul>
    {#each episodes as episode}
      <a href={`/episode/${episode.id}`}>
        <li>{`${episode.episode}: ${episode.name}`}</li>
      </a>
    {/each}
  </ul>
</section>