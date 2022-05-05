<script lang="ts">
	let numbers:number[] = [1,2,3,4,5]
	const addNumber = () => {
		numbers = [...numbers, numbers.length + 1]
	}
	$: sum = numbers.reduce((prev, current) => prev + current)
</script>
<p>numbers: {numbers}</p>
<p>sum: {sum}</p>
<button on:click={addNumber}>add number!</button>
