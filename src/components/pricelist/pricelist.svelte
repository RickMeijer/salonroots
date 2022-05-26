<script lang="ts">
	type Pricelist = Array<{
		label: string;
		cols?: number;
		items: PricelistItem[];
	}>;
	type PricelistItem = {
		label: string;
		price: number;
	};

	export let pricelist: Pricelist;
</script>

<div class="grid grid-cols-2 gap-4">
	{#each pricelist as category}
		<section class="col-span-2 sm:col-span-{category.cols || 1}">
			<h2 class="text-lg text-primary border-y-8 border-support mt-8 mb-4 uppercase">
				{category.label}
			</h2>
			<ul class={category.cols ? 'grid sm:grid-cols-2 gap-x-4' : ''}>
				{#each category.items as item}
					<li class="flex justify-between">
						<h3 class="">{item.label}</h3>
						<span>€ {item.price},-</span>
					</li>
				{/each}
			</ul>
		</section>
	{/each}
</div>

<style>
	h2 {
		letter-spacing: 0.1em;
	}
</style>
