<script>
	import CallButton from '../CallButton.svelte';
	import WhatsappButton from '../WhatsappButton.svelte';
	import headerImg from './headerimg.jpg';
</script>

<header class="text-center relative bg-cover py-10" style="background-image: url({headerImg});">
	<div class="bg-support bg-opacity-80 py-4 ">
		<h1 class="text-5xl uppercase">Salon Roots</h1>
		<p>by Kim Kloet</p>
	</div>

	<WhatsappButton class="mt-8" />
</header>

<style>
	h1 {
		letter-spacing: 0.2em;
	}
	p {
		letter-spacing: 0.2em;
	}
</style>
