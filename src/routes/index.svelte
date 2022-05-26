<script lang="ts">
	import { ClockIcon, EmailIcon, LocationIcon, PhoneIcon } from '@/components/Icons';
	import Header from '@/components/header/header.svelte';
	import Pricelist from '@/components/pricelist/pricelist.svelte';
	import CallButton from '@/components/CallButton.svelte';

	const pricelist = [
		{
			label: 'Cuts',
			cols: 2,
			items: [
				{ label: 'Quality Cut', price: 25 },
				{ label: 'New Model', price: 30 },
				{ label: 'Cut to perfection', price: 40 },
				{ label: 'Touch up, contour', price: 15 },
				{ label: 'Curly cut', price: 35 },
				{ label: 'Clip it / kids tm 15', price: 15 }
			]
		},
		{
			label: 'Relax',
			items: [
				{ label: 'Headmassage', price: 20 },
				{ label: 'Washmassage', price: 20 },
				{ label: 'Facemassage', price: 20 },
				{ label: 'Hairspa', price: 35 }
			]
		},
		{
			label: 'Barber',
			items: [
				{ label: 'Beard trim', price: 15 },
				{ label: 'Shave', price: 25 },
				{ label: 'Barbercut', price: 30 },
				{ label: 'Quick rinse', price: 5 }
			]
		},
		{
			label: 'Group & Combo',
			items: [
				{ label: 'Family Cut', price: 75 },
				{ label: 'Cut quake', price: 85 },
				{ label: 'Groupies', price: 30 },
				{ label: 'Colorcutgroup', price: 5 }
			]
		},
		{
			label: 'Natulique color',
			items: [
				{ label: 'Colortreatment', price: 25 },
				{ label: '1/4 head', price: 30 },
				{ label: '1/2 head', price: 40 },
				{ label: 'Full head', price: 50 }
			]
		}
	];
</script>

<nav
	class="sticky bg-primary text-white p-4 justify-between top-0 z-10 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4  gap-4"
>
	<a href="tel:0611097033" class="flex items-center gap-2 group leading-none underline">
		<PhoneIcon />
		<span class="hidden group-hover:inline-block sm:inline-block">06 11 09 7033</span>
	</a>
	<a href="mailto:info@salonroots.nl" class="flex items-center gap-2 group leading-none underline">
		<EmailIcon />
		<span class="hidden group-hover:inline-block sm:inline-block">info@salonroots.nl</span>
	</a>
	<a
		href="https://goo.gl/maps/DspAUJMxRiSMukPE7"
		class="flex items-center gap-2 group leading-none underline"
	>
		<LocationIcon />
		<span class="hidden group-hover:inline-block sm:inline-block"
			>Papenvoort 2, 9447 TV Papenvoort</span
		>
	</a>
	<span class="flex items-center gap-2 group leading-none">
		<ClockIcon />
		<span class="hidden group-hover:inline-block sm:inline-block"
			>Dagelijks, op aanvraag tussen 7.00-22.00</span
		>
	</span>
</nav>

<Header />

<main class="max-w-screen-md m-auto">
	<Pricelist {pricelist} />
</main>

<section class="max-w-screen-md mt-8 m-auto">
	<h1 class="text-xl mb-2">Gezond haar begint bij de wortel</h1>
	<p>
		Wil jij dat iemand jou ziet? Verwacht jij van jouw kapper het beste advies op het gebied van
		style, verzorging en kleur? Je bent bij mij in goede handen. Ik ben de spiegel voor jou, voor
		jouw meest authentieke style. Van kleine veranderingen met grote impact tot grote veranderingen
		voor een totale metamorfose. Ik werk met de nieuwste technieken op het gebied van Cut&Color en
		met producten van NATULIQUE, welke niet belastend zijn voor het milieu. Alle producten zijn
		VEGAN en volledig vrij van ammonia met een professioneel resultaat. (incl haarkleuring en
		blondering!)
	</p>
	<CallButton class="mt-8 mb-4" />
</section>
