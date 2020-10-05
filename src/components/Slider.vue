<template>
	<section class=" px-5 py-5">
		<div class="container">
			<div class="columns is-vcentered is-desktop">
				<div class="column is-half-desktop">
					<b-carousel>
						<b-carousel-item
							v-for="(s, i) in slider"
							:key="i"
						>
							<section>
								<div>
									<b-image
										:src="`require('@/assets/img/${s.webp}')`"
										:webp-fallback="`require('@/assets/img/${s.jpg}')`"
									></b-image>
								</div>
							</section>
						</b-carousel-item>
					</b-carousel>
					<!-- <b-carousel>
						<b-carousel-item> >
							<section>
								<div>
									<b-image
										:src="require('@/assets/img/slider_1.webp')"
										:webp-fallback="require('@/assets/img/slider_1.jpg')"
									></b-image>
								</div>
							</section>
						</b-carousel-item>
					</b-carousel> -->
				</div>
				<div class="column is-half-desktop px-5 py-5">
					<h2 class="is-size-4-tablet is-size-3-mobile has-text-weight-medium my-2">
						CHI SIAMO
					</h2>
					<p class="mb-2">
						Il Policlinico odontoiatrico ARENA è un centro specializzato nei servizi di parodontologia, impiantologia, protetica e chirurgia orale. Policlinico ARENA ha riunito un team di 20 specialisti di tutte le branche dell’odontoiatria. Tutti i nostri specialisti insieme al nostro staff professionale sono a vostra disposizione durante la vostra terapia.

						Noi ci troviamo a Zagabria, la capitale della Croazia. Oltre a fare una visita specialistica e una terapia odontoiatrica, ogni paziente può sfruttare l’opportunità per conoscere la città, la cultura e le abitudini locali nel tempo libero.
					</p>
					<b-image
						class="certifikati"
						:src="require('@/assets/img/certifikati.webp')"
						:webp-fallback="require('@/assets/img/certifikati.jpg')"
					></b-image>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				slider: [
					{ webp: "slider_1.webp", jpg: "slider_1.jpg" },
					{ webp: "slider_2.webp", jpg: "slider_2.jpg" },
					{ webp: "slider_3.webp", jpg: "slider_3.jpg" },
				],
			};
		},
	};
</script>

<style scoped>
	.certifikati {
		max-width: 300px;
	}
</style>