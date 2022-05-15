<script>
	let x = 4;
</script>

{#if x >= 10}
	<p>{x} is 10 or more</p>
{:else if x > 5}
	<p>{x} is between 5 and 10</p>
{:else}
	<p>{x} is 5 or less</p>
{/if}
