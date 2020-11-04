<template>
  <section class="py-3 px-3 bg-color">
    <div class="container">
      <b-image
        v-if="logo"
        class="img-header"
        :src="img_url + logo"
        webp-fallback=".png"
      ></b-image>
    </div>
  </section>
</template>

<script>
  import api from '@/plugins/axios';

  export default {
    data() {
      return {
        logo: '',
      };
    },

    methods: {
      getLogo() {
        api
          .get('ce21f04d-35f0-4fbb-83cb-45089d127d4a')
          .then((response) => {
            this.logo = response.data.logo;
          })
          .catch((error) => {
            this.$buefy.toast.open({
              message: 'Error: ' + error,
              type: 'is-danger',
            });
          });
      },
    },

    created() {
      this.getLogo();
    },
  };
</script>

<style scoped>
  .bg-color {
    background-color: #eef2f5;
  }

  .img-header {
    width: 200px;
  }

  @media screen and (max-width: 769px) {
    .img-header {
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>