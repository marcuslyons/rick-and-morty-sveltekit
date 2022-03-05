<script>
  export let character;
</script>

<svelte:head>
  <title>{character.name}</title>
</svelte:head>

<section>
  <a href="/character">Back to Characters</a>
  <div>
    <img src={character.image} alt="">
    <h1>{character.name}</h1>
    <h3>{character.species}</h3>
  </div>

  <div>
    <h3>Origin</h3>
    {#if character.origin.url}
      <a href={character.origin.url}>{character.origin.name}</a>
    {:else}
      <p>{character.origin.name}</p>
    {/if}
  </div>

  <div>
    <h3>Location</h3>
    {#if character.location.url}
      <a href={character.location.url}>{character.location.name}</a>
    {:else}
      <p>{character.location.name}</p>
    {/if}
  </div>

  <div>
    <h3>Episodes</h3>
    <ul>
      {#each character.episode as episode}
        <li>{episode}</li>
      {/each}
    </ul>
  </div>

</section>