<script lang="ts">
	type Cat = {
		id: string
		name: string
	}
	let cats: Cat[] = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
	const name = 'test'
</script>

<h1>The Famous Cats of YouTube</h1>
{name}
<ul>
	{#each cats as {id, name}, index}
		<li>{index}:<a target="_blank" href="https://www.youtube.com/watch?v={id}">
			{#if name}
				{name}
			{:else}
				{name}(ここではscript内でのnameではなく分割代入したほうが読まれる)
			{/if}
		</a></li>
	{/each}
</ul>
