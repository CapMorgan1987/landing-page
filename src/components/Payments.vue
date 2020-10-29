<template>
	<section class=" px-5 pb-5 ">
		<div class="container">
			<h2 class="is-size-2 has-text-centered my-5">DOSTUPNI NAČINI PLAĆANJA</h2>
			<div class="columns is-mobile">
				<div
					class="column arena-background text-white px-5 mx-3"
					v-for="column in columns"
					:key="column.index"
				>
					<h2 class="is-size-2 is-size-3-touch has-text-centered">{{ column.rates }}</h2>
					<div
						v-for="card in column.cards"
						:key="card.index"
					>
						<b-image
							class="img-smjestaj"
							:src="require(card.cardImg)"
						></b-image>
						<h3 class="is-size-4 has-text-centered">{{ card.cardName }}</h3>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				columns: [
					{
						rates: "2-12",
						cards: [
							{
								cardImg:
									"../assets/img-new/cards/raiffeisenmastercard.webp",
								cardName: "Raiffeisen bank, MasterCard, Visa",
							},
						],
					},
					{ rates: "2-24" },
					{ rates: "2-36" },
					{ rates: "24-60" },
				],
			};
		},
	};
</script>

<style scoped>
</style>