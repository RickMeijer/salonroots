<script>
	import { WhatsappIcon } from '@/components/Icons';
	export { className as class };
	let className = '';
	const text = encodeURIComponent('Ik zou graag een beurt willen.');
</script>

<a
	href="https://wa.me/31611097033?text={text}"
	class="px-4 py-2 rounded-md bg-primary text-white inline-flex items-center gap-2 {className}"
>
	<WhatsappIcon />
	App voor een afspraak
</a>

<style>
	a,
	a :global(svg) {
		transition: transform 0.2s cubic-bezier(0.16, -0.16, 0.45, 1.89);
	}
	a:focus,
	a:hover {
		transform: scale(1.1);
	}
	a:focus :global(svg),
	a:hover :global(svg) {
		transform: scale(1.5) rotate(10deg);
	}
</style>
