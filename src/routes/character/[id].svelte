<script>
  export let character;
</script>

<svelte:head>
  <title>{character.name}</title>
</svelte:head>

<section>
  <h1>{character.name}</h1>

  <!-- <pre>{JSON.stringify(character, null, 2)}</pre> -->

  <a href="/character">Back to Characters</a>
</section>