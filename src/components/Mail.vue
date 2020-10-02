<template>
	<section class=" px-5 py-5 back-img">
		<div class="container">
			<div class="columns is-vcentered is-desktop">
				<div class="column is-half-desktop px-5 py-5 has-background-white-ter">
					<b-field
						type="is-success"
						required="true"
					>
						<b-input placeholder="Nome e Cognome"></b-input>
					</b-field>
					<b-field
						type="is-success"
						required="true"
					>
						<b-input placeholder="E-mail"></b-input>
					</b-field>
					<b-field
						type="is-success"
						required="true"
					>
						<b-input placeholder="Telefono"></b-input>
					</b-field>
					<b-field
						type="is-success"
						required="true"
					>
						<b-input
							placeholder="Scrivi il messaggio...."
							maxlength="200"
							type="textarea"
						></b-input>
					</b-field>
					<div class="field">
						<b-checkbox
							type="is-success"
							required="true"
						>Con l'invio dei dati tramite questo modulo di contatto, permetto al Policlinico odontoiatrico ARENA di contattarmi riguardando la mia richiesta e di usare i miei dati personali raccolti di trattarli in avanti, in concordanza con la</b-checkbox>
					</div>
					<div class="field">
						<b-checkbox type="is-success">Voglio ricevere delle informazioni sulle offerte e sugli sconti.</b-checkbox>
					</div>
					<div>
						<b-button
							expanded
							class="btn-arena"
						>Mandami un preventivo</b-button>
					</div>
				</div>
				<div class="column  is-half-desktop px-5">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {};
		},
	};
</script>

<style scoped>
	.back-img {
		background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
			url("../assets/img/mailback.webp");
		background-color: black;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-position: bottom right;
	}
</style>