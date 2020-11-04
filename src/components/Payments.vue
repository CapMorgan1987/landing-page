<template>
  <section class="px-5 pb-5">
    <div class="container">
      <h2 class="is-size-2 has-text-centered my-5">DOSTUPNI NAČINI PLAĆANJA</h2>
      <div class="columns is-desktop">
        <div
          class="column arena-background text-white px-5 mx-3"
          v-for="(c, i) in cards"
          :key="i"
        >
          <h2 class="is-size-2 is-size-3-touch has-text-centered">
            {{ c.rates }}
          </h2>
          <div v-for="(card, i) in c.cardsInfo" :key="i">
            <b-image
              v-if="card.cardImg"
              class="img-smjestaj"
              :src="img_url + '/cards/' + card.cardImg"
              webp-fallback=".png"
            ></b-image>
            <h3 v-if="card.cardName" class="is-size-4 has-text-centered">
              {{ card.cardName }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import api from '@/plugins/axios';

  export default {
    data() {
      return {
        cards: [],
        // columns: [
        //   {
        //     rates: "2-12",
        //     "2-12": [
        //       {
        //         cardImg: "raiffeisenmastercard.webp",
        //         cardName: "Raiffeisen bank, MasterCard, Visa",
        //       },
        //     ],
        //   },
        //   { rates: "2-24" },
        //   { rates: "2-36" },
        //   { rates: "24-60" },
        // ],
      };
    },

    methods: {
      getCards() {
        api
          .get('0eb66d2d-344e-4264-abb2-abddf47e2324')
          .then((response) => {
            this.cards = response.data.cards;
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
      this.getCards();
    },
  };
</script>

<style scoped>
  .img-smjestaj {
    max-width: 222px;
    margin: 0 auto;
  }
</style>
