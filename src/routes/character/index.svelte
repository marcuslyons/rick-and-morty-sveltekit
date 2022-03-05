<script>
  export let characters;
</script>

<svelte:head>
  <title>Characters</title>
</svelte:head>

<section>
  <a href="/">Home</a>
  <h1>Characters</h1>

  <!-- <pre>{JSON.stringify(characters, null, 2)}</pre> -->

  <ul>
    {#each characters as character}
      <li><a href={`/character/${character.id}`}>{character.name}</a></li>
    {/each}
  </ul>

</section>
