<template>
	<section class=" px-5">
		<div class="container">
			<div class="columns is-vcentered is-desktop">
				<div class="column  is-one-third-desktop px-5">
					<div class="mb-6">
						<h2 class="is-size-4-tablet is-size-3-mobile has-text-weight-medium my-2">
							PROCEDURA ALL-ON-6
						</h2>
						<p class="mb-2">Il metodo ALL-ON-6 è una moderna procedura odontoiatrica dell’inserimento di 6 impianti su cui poggia il lavoro protesico (corone dentali singole o ponti). Soddisfa pienamente tutte le esigenze estetiche e funzionali.</p>
						<b-image
							class="img-services"
							:src="require('@/assets/img/all-on-6.webp')"
							:webp-fallback="require('@/assets/img/all-on-6.png')"
						></b-image>
					</div>
					<div class="mb-6">
						<h2 class="is-size-4-tablet is-size-3-mobile has-text-weight-medium my-2">
							IMPLANTOLOGIA
						</h2>
						<p class="mb-2">L’implantologia è la branca dell’odontoiatria che si occupa di inserimento di impianti dentali. Questo è il più moderno metodo usato per risolvere problemi di mancanza di uno o più denti.</p>
						<p>Gli impianti dentali sostituiscono la radice del dente e in combinazione con il lavoro protesico ripristinano la funzione fonetica e estetica del dente.</p>
						<b-image
							class="img-services"
							:src="require('@/assets/img/implantati.webp')"
							:webp-fallback="require('@/assets/img/implantati.png')"
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
					<div class="mb-6">
						<h2 class="is-size-4-tablet is-size-3-mobile has-text-weight-medium my-2">
							IMPIANTI DENTALI
						</h2>
						<p>Impianti dentali sono elaborati in titanio, il materiale biocompatibile che l’osso accetta come un materiale naturale.</p>
						<p class="mb-2">Un impianto dentale rappresenta la soluzione ideale per le persone alle quali mancano uno o più denti, perché i denti adiacenti e sani non devono essere limati, ma restano intatti.</p>
						<b-image
							class="img-services"
							:src="require('@/assets/img/implantat.webp')"
							:webp-fallback="require('@/assets/img/implantat.png')"
						></b-image>
					</div>
					<div class="mb-6">
						<h2 class="is-size-4-tablet is-size-3-mobile has-text-weight-medium my-2">
							CORONE DENTALI
						</h2>
						<p>Le corone dentali in ceramica sono dei surrogati che vengono permanentemente fissati su denti limati o su impianti con lo scopo di ricostruire i denti.</p>
						<p class="mb-2">Vengono realizzate quando i denti sono talmente compromessi che otturazioni sono impossibili, quando i denti sono indeboliti da carie o cure canalari o sempicemente quando l’esistente manufatto dentale si è consumato.</p>
						<b-image
							class="img-services"
							:src="require('@/assets/img/krunica.webp')"
							:webp-fallback="require('@/assets/img/krunica.jpg')"
						></b-image>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {};
</script>

<style scoped>
	.img-services {
		max-width: 300px;
		margin-left: auto;
		margin-right: auto;
	}
</style>