<template>
	<section class=" px-5 py-5 back-img">
		<div class="container">
			<div class="columns is-vcentered is-desktop">
				<div class="column is-half-desktop px-5 py-5 has-background-white-ter">
					<b-field>
						<b-input v-model="name" placeholder="Nome e Cognome" required></b-input>
					</b-field>
					<b-field>
						<b-input v-model="email" type="email" placeholder="E-mail" required></b-input>
					</b-field>
					<b-field>
						<b-input v-model="tel" placeholder="Telefono" required></b-input>
					</b-field>
					<b-field>
						<b-input
							v-model="message"
              placeholder="Scrivi il messaggio...."
							maxlength="200"
							type="textarea"
              required
						></b-input>
					</b-field>
					<div class="field">
						<b-checkbox
              v-model="terms"
							type="is-success"
							required
						>Con l'invio dei dati tramite questo modulo di contatto, permetto al Policlinico odontoiatrico ARENA di contattarmi riguardando la mia richiesta e di usare i miei dati personali raccolti di trattarli in avanti, in concordanza con la</b-checkbox>
					</div>
					<div class="field">
						<b-checkbox v-model="newsletter" type="is-success">Voglio ricevere delle informazioni sulle offerte e sugli sconti.</b-checkbox>
					</div>
					<div>
						<b-button
							expanded
							class="btn-arena"
              :disabled="!terms || name === '' || email === '' || tel === '' || message === ''"
              @click="send()"
						>Mandami un preventivo</b-button>
					</div>
				</div>
				<div class="column is-half-desktop px-5">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
  import api from '@/plugins/axios'

	export default {
		data() {
			return {
        name: '',
        email: '',
        tel: '',
        message: '',
        terms: false,
        newsletter: false
      };
    },

    methods: {
      send() {
        api.post('email.php', {
          name: this.name,
          email: this.email,
          tel: this.tel,
          message: this.message,
          newsletter: this.newsletter
        })
        .then(response => {
          alert(response.data.message)
        })
        .catch(error => {
          alert(error)
        })
      }
    }
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
