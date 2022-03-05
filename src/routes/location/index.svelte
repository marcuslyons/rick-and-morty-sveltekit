<script>
  export let locations;
</script>

<svelte:head>
  <title>Locations</title>
</svelte:head>

<section>
  <a href="/">Home</a>
  <h1>Locations</h1>

  <!-- <pre>{JSON.stringify(locations, null, 2)}</pre> -->

  <ul>
    {#each locations as location}
      <li><a href={`/location/${location.id}`}>{location.name}</a></li>
    {/each}
  </ul>

</section>
