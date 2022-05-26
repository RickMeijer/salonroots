<script>
	import { PhoneIcon } from '@/components/Icons';
	export { className as class };
	let className = '';
</script>

<a
	href="tel:0611097033"
	class="px-4 py-2 rounded-md bg-primary text-white inline-flex items-center gap-2 {className}"
>
	<PhoneIcon />
	Bel voor een afspraak
</a>

<style>
	@keyframes ring {
		0% {
			transform: rotate(-10deg) scale(1.5);
		}
		100% {
			transform: rotate(10deg) scale(1.5);
		}
	}

	a:focus :global(svg),
	a:hover :global(svg) {
		animation: ring 0.15s steps(4, end) infinite;
	}
</style>
