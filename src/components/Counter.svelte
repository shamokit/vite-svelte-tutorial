<script lang="ts">
	let count: number = 1;
	$: double = count * 2
	const increment = () => {
		count += 1;
	};
</script>

<button on:click={increment}>
	Clicks: {count} {count === 1 ? 'time' : 'times'}
</button>
<p>double: {double}</p>

<style>
	button {
		font-family: inherit;
		font-size: inherit;
		padding: 1em 2em;
		color: rgb(var(--main-color));
		background-color: rgba(var(--main-color),.1);
		border: 2px solid rgba(var(--main-color),1);
		border-radius: 2em;
		outline: none;
		width: 200px;
		font-variant-numeric: tabular-nums;
		cursor: pointer;
	}

	button:hover,
	button:active,
	button:focus-visible {
		background-color: rgb(var(--main-color));
		border-color: rgba(var(--main-color),1);
		color: #fff;
	}
</style>
