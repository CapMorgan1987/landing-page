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
          .get('751691c6-0af5-4c95-9df1-df7f707d7f0d')
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