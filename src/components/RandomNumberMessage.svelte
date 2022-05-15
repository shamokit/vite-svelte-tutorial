<script lang="ts">
	const getRandomNumber = async () => {
		const res = await fetch(`https://svelte.jp/tutorial/random-number`);
		const text = await res.text();

		if (res.ok) {
			return Number(text);
		} else {
			throw new Error(text);
		}
	}

	let promise = getRandomNumber();

	function handleClick() {
		promise = getRandomNumber();
	}
</script>

<button on:click={handleClick}>
	generate random number
</button>

{#await promise}
	<p>取得中...</p>
{:then number}
	<p>The number is {number}</p>
{:catch error}
	<p>{error}</p>
{/await}
