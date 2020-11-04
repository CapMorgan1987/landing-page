<template>
  <section class="bg-img">
    <div class="container container-mobile">
      <div class="columns is-vcentered is-desktop">
        <div class="column is-half-fullhd px-5">
          <h1 class="is-size-2-tablet is-size-2-mobile font400">
            {{ data.title }}
          </h1>
          <h3 class="is-size-3-tablet is-size-2-mobile mb-6">
            {{ subtitle }}
            <span class="has-text-weight-semibold text-green">{{
              greenSubtitle
            }}</span>
          </h3>
          <div class="mb-3 px-5">
            <div v-for="(ct, i) in data.checkText" :key="i" class="dflex">
              <b-image
                v-if="checkImg"
                class="icon-header"
                :src="img_url + '/icons/' + checkImg"
                webp-fallback=".png"
              ></b-image>
              <p v-if="ct.text" class="text-green">{{ ct.text }}</p>
            </div>
          </div>
          <div class="mt-6">
            <b-button size="is-large" class="btn-arena">{{ btnText }}</b-button>
          </div>
        </div>
        <div class="column is-half-fullhd"></div>
      </div>
    </div>
    <div class="container pb-2 pl-5">
      <div>
        <p class="mt-5 is-size-7">{{ infoText }}</p>
      </div>
    </div>
  </section>
</template>

<script>
  import api from '@/plugins/axios';

  export default {
    data() {
      return {
        data: {},
        title: '',
        subtitle: '',
        greenSubtitle: '',
        checkImg: '',
        checkText: [],
        btnText: '',
        infoText: '',
      };
    },

    methods: {
      getHero() {
        api
          .get('c54ee49d-c1e2-4122-a0a5-0f476ce04577')
          .then((response) => {
            this.data = response.data
            this.title = response.data.title;
            this.subtitle = response.data.subtitle;
            this.greenSubtitle = response.data.greenSubtitle;
            this.checkImg = response.data.checkImg;
            this.checkText = response.data.checkText;
            this.btnText = response.data.btnText;
            this.infoText = response.data.infoText;
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
      this.getHero();
    },
  };
</script>

<style>
  .bg-img {
    background-image: url('../assets/img-new/naslovna.webp');
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
      background-image: url('../assets/img-new/naslovna_m.webp');
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
