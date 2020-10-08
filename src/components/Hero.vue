<template>
	<section class="bg-img">
		<div class="container container-mobile">
			<div class="columns is-vcentered is-desktop">
				<div class="column is-half-fullhd px-5">
					<h1 class="is-size-2-tablet is-size-2-mobile font400">PROTEZA NA PREČKU</h1>
					<h3 class="is-size-3-tablet is-size-2-mobile mb-6">već od <span class="has-text-weight-semibold arena-green">560kn mjesečno*</span></h3>
					<div class="mb-3 px-5">
						<div
							class="dflex"
							v-for="(check, i) in checks"
							:key="i"
						>
							<b-image
								class="icon-header"
								:src="require('@/assets/img-new/icons/check.webp')"
								:webp-fallback="require('@/assets/img-new/icons/check.png')"
							></b-image>
							<p class="arena-green">{{ check.text }}</p>
						</div>
					</div>
					<div class=" mt-6">
						<b-button
							size="is-large"
							class="btn-arena"
						>KONTAKTIRAJTE NAS</b-button>
					</div>
				</div>
				<div class="column is-half-fullhd">
				</div>
			</div>
		</div>
		<div class="container pb-2 pl-5">
			<div>
				<p class="mt-5 is-size-7">*cijena od 560kn mjesečno je okvirna cijena 4 implantata i proteze. Individualizirani plan terapije biti će izrađen tijekom specijalističkog pregleda</p>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				checks: [
					{ text: "BESPLATAN specijalistički pregled" },
					{ text: "NEOBAVEZUJUĆA ponuda" },
					{ text: "BESKAMATNO obročno plaćanje" },
				],
			};
		},
	};
</script>

<style>
	.bg-img {
		background-image: url("../assets/img-new/naslovna.webp");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 0% 40%;
		padding-top: 80px;
	}

	.icon-header {
		width: 20px;
		margin-right: 10px;
	}

	.dflex {
		display: flex;
	}

	.center button {
		margin-left: auto;
		margin-right: auto;
	}

	@media screen and (max-width: 769px) {
		.bg-img {
			background-image: url("../assets/img-new/naslovna_m.webp");
			background-size: cover;
			background-repeat: no-repeat;
			background-position: 50% 80%;
			padding-top: 20px;
		}

		.container-mobile {
			padding-bottom: 300px;
		}
	}
</style>