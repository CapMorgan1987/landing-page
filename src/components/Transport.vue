<template>
	<section class=" px-5 py-5">
		<div class="container">
			<div class="columns is-desktop">
				<div class="column is-half-desktop has-text-centered">
					<b-image
						class="img-smjestaj"
						:src="require('@/assets/img/smjestaj.webp')"
						:webp-fallback="require('@/assets/img/smjestaj.jpg')"
					></b-image>
					<h2 class="is-size-4-tablet is-size-3-mobile has-text-weight-medium my-2">
						ALLOGGIO GRATUITO
					</h2>
					<p>
						Per tutta la durata della terapia al Policlinico ARENA ci siamo impegnati che il Vostro soggiorno sia il più confortevole possibile e che Vi sentiate come la vostra casa. Per questo motivo Vi assicuriamo L’ALLOGGIO GRATUITO.
					</p>
				</div>
				<div class="column is-half-desktop has-text-centered">
					<b-image
						class="img-smjestaj"
						:src="require('@/assets/img/transport.webp')"
						:webp-fallback="require('@/assets/img/transport.jpg')"
					></b-image>
					<h2 class="is-size-4-tablet is-size-3-mobile has-text-weight-medium my-2">
						TRASPORTO ORGANIZATO
					</h2>
					<p>
						Su vostra richiesta, abbiamo organizzato anche il trasporto in nostri pullman sicuri e confortevoli. Potete rilassarvi e godervi in un piacevole viaggio con i nostri autisti tutti di elevata professionalità.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {};
</script>

<style scoped>
	.img-smjestaj {
		max-width: 500px;
		margin-left: auto;
		margin-right: auto;
	}
</style>