<template>
	<section class=" px-5 arena-background text-white">
		<div class="container">
			<div class="column px-5">
				<h2 class="is-size-2 is-size-3-touch has-text-centered">{{ serviceTitle }}</h2>
			</div>
			<div class="separator"></div>
			<p class="has-text-centered mb-3">{{ serviceDescr }}</p>
			<div class="columns is-desktop mt-4">
				<div class="column  is-one-half-desktop px-5">
					<div>
						<h3 class="is-size-5 has-text-weight-bold">Prednosti:</h3>
					</div>
					<div
						v-for="(prednost, i) in prednosti"
						:key="i"
					>
						<p>
							- {{ prednost }}
						</p>
					</div>
				</div>
				<div class="column  is-one-half-desktop px-5">
					<div>
						<h3 class="is-size-5 has-text-weight-bold">Postupak terapije:</h3>
					</div>
					<div
						v-for="(postupak, i) in postupakTerapije"
						:key="i"
					>
						<p>
							- {{ postupak }}
						</p>
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
				serviceTitle: "POLUFIKSNA PROTEZA NA IMPLANTATIMA",
				serviceDescr:
					"Moderna stomatologija nudi polu-fiksno protetsko rješenje kao što je „proteza na prečku“, odnosno, protezu koja dolazi bez nepca, a postavlja se na četiri zubna implantata. Ovo je idealno rješenje za pacijente koji žele zauvijek riješiti problem bezubosti i u potpunosti vratiti funkcionalnost i estetiku svog osmijeha, a žele doživotno rješenje.",
				prednosti: [
					"dolazi bez nepca",
					"zaustavlja gubitak kosti",
					"nema straha od ispadanja",
					"u potpunosti vraća funkciju žvakanja",
					"po potrebi se skida radi održavanja oralne higijene",
				],
				postupakTerapije: [
					"u prvoj posjeti se ugrađuju četiri implantata",
					"pacijent dobiva privremenu protezu dok čeka da implantati srastu s kosti (oseointegracija)",
					"nakon što implantati zarastu (3-4 mjeseca), uzima se otisak za finalnu protezu",
					"unutar 48 sati, pacijent dolazi na probu rada kako bi se utvrdilo odgovara li pacijentu te, ako je sve u redu, ugovara se finalna posjeta u kojoj se proteza postavlja na ugrađene implantate i pacijent odlazi kući s novim osmijehom",
				],
			};
		},
	};
</script>

<style scoped>
	.separator {
		width: 42px;
		height: 3px;
		background-color: white;
		margin-left: auto;
		margin-right: auto;
		margin-top: 20px;
		margin-bottom: 20px;
	}
</style>