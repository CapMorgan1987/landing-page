<template>
	<section class=" px-5 py-5">
		<div class="container">
			<div class="columns is-vcentered is-desktop">
				<div class="column is-half-desktop px-5 arena-background">
					<b-field
						label="Your Name"
						label-position="on-border"
					>
						<b-input placeholder="Franko Vidic">
						</b-input>
					</b-field>
					<b-field
						label="Email"
						label-position="on-border"
					>
						<b-input
							type="email"
							placeholder="franko@vidic@gmail.com"
							maxlength="30"
						>
						</b-input>
					</b-field>
					<b-field
						label="Number"
						label-position="on-border"
					>
						<b-input
							placeholder="096 123 4567"
							maxlength="30"
						>
						</b-input>
					</b-field>
					<b-field
						label="Message"
						label-position="on-border"
					>
						<b-input
							placeholder="Boli me zub!!!!"
							maxlength="200"
							type="textarea"
						></b-input>
					</b-field>
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