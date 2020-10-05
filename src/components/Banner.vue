<template>
	<section class=" px-5 py-5">
		<div class="container">
			<b-image
				class="banner"
				:src="require('@/assets/img/banner.webp')"
				:webp-fallback="require('@/assets/img/banner.jpg')"
			></b-image>
		</div>
	</section>
</template>

<script>
	export default {};
</script>

<style scoped>
	.banner {
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}
</style>