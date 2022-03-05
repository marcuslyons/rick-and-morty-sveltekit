<script>
  export let location;
</script>

<svelte:head>
  <title>{location.name}</title>
</svelte:head>

<section>
  <a href="/location">Back to Locations</a>
  <!-- <pre>{JSON.stringify(location, null, 2)}</pre> -->
  <div>
    <h1>{location.name}</h1>
    <h3>Type: {location.type}</h3>
    <h3>Dimension: {location.dimension}</h3>
  </div>

  <div>
    <h3>Residents</h3>
    {#if location.residents.length}
      <ul>
        {#each location.residents as resident}
          <li>{resident}</li>
        {/each}
      </ul>
    {:else}
      <p>None</p>
    {/if}
</div>

</section>