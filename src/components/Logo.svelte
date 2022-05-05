<script>
	import logo from "../assets/svelte.png";
	import src from "../assets/svelte.png";
	const name = 'Svelte'
	const alt = 'Svelte Logo'
</script>

<img src={logo} alt="{name} Logo" />
<img {src} {alt} />

<style>
	img {
		height: 16rem;
		width: 16rem;
	}
</style>
