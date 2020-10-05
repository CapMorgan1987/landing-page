<template>
	<section class=" px-5">
		<div class="container">
			<div class="columns is-vcentered is-desktop">
				<div class="column  is-one-third-desktop px-5">
					<div
						v-for="(service, i) in service1"
						:key="i"
						class="mb-6"
					>
						<h2 class="is-size-4-tablet is-size-3-mobile has-text-weight-medium my-2">
							{{ service.title }}
						</h2>
						<p class="mb-2">{{ service.text }}</p>
						<p class="mb-2">{{ service.text2 }}</p>
						<b-image
							class="img-services"
							:src="require(`@/assets/img/${service.webp}`)"
							:webp-fallback="require(`@/assets/img/${service.png}`)"
						></b-image>
					</div>
				</div>
				<div class="column  is-one-third-desktop px-5">
					<div class="table-container mb-6">
						<table class="table is-striped is-bordered is-fullwidth">
							<thead>
								<tr>
									<th>Servizi</th>
									<th>Prezi</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Visita specialistica e consulto</td>
									<td></td>
								</tr>
								<tr>
									<td>Impianto Standard + garanzia a vita</td>
									<td>292€</td>
								</tr>
								<tr>
									<td>Corona in metallo-ceramica (CAD/CAM)</td>
									<td>201€</td>
								</tr>
								<tr>
									<td>Corona completamente in ceramica – zirconio (CAD/CAM)</td>
									<td>292€</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div>
						<b-image
							class="img-services"
							:src="require('@/assets/img/garanzia.webp')"
							:webp-fallback="require('@/assets/img/garanzia.png')"
						></b-image>
					</div>
				</div>
				<div class="column  is-one-third-desktop px-5">
					<div
						v-for="(service, i) in service2"
						:key="i"
						class="mb-6"
					>
						<h2 class="is-size-4-tablet is-size-3-mobile has-text-weight-medium my-2">
							{{ service.title }}
						</h2>
						<p class="mb-2">{{ service.text }}</p>
						<p class="mb-2">{{ service.text2 }}</p>
						<b-image
							class="img-services"
							:src="require(`@/assets/img/${service.webp}`)"
							:webp-fallback="require(`@/assets/img/${service.png}`)"
						></b-image>
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
				service1: [
					{
						title: "PROCEDURA ALL-ON-6",
						text:
							"Il metodo ALL-ON-6 è una moderna procedura odontoiatrica dell’inserimento di 6 impianti su cui poggia il lavoro protesico (corone dentali singole o ponti). Soddisfa pienamente tutte le esigenze estetiche e funzionali.",
						webp: "all-on-6.webp",
						png: "all-on-6.png",
					},
					{
						title: "IMPLANTOLOGIA",
						text:
							"L’implantologia è la branca dell’odontoiatria che si occupa di inserimento di impianti dentali.",
						text2:
							"Questo è il più moderno metodo usato per risolvere problemi di mancanza di uno o più denti. Gli impianti dentali sostituiscono la radice del dente e in combinazione con il lavoro protesico ripristinano la funzione fonetica e estetica del dente.",
						webp: "implantati.webp",
						png: "implantati.png",
					},
				],
				service2: [
					{
						title: "IMPIANTI DENTALI",
						text:
							"Impianti dentali sono elaborati in titanio, il materiale biocompatibile che l’osso accetta come un materiale naturale.",
						text2:
							"Un impianto dentale rappresenta la soluzione ideale per le persone alle quali mancano uno o più denti, perché i denti adiacenti e sani non devono essere limati, ma restano intatti.",
						webp: "implantat.webp",
						png: "implantat.png",
					},
					{
						title: "CORONE DENTALI",
						text:
							"Le corone dentali in ceramica sono dei surrogati che vengono permanentemente fissati su denti limati o su impianti con lo scopo di ricostruire i denti.",
						text2:
							"Vengono realizzate quando i denti sono talmente compromessi che otturazioni sono impossibili, quando i denti sono indeboliti da carie o cure canalari o sempicemente quando l’esistente manufatto dentale si è consumato.",
						webp: "krunica.webp",
						png: "krunica.jpg",
					},
				],
			};
		},
	};
</script>

<style scoped>
	.img-services {
		max-width: 300px;
		margin-left: auto;
		margin-right: auto;
	}
</style>