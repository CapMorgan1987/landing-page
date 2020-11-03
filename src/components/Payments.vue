<template>
  <section class="px-5 pb-5">
    <div class="container">
      <h2 class="is-size-2 has-text-centered my-5">DOSTUPNI NAČINI PLAĆANJA</h2>
      <div class="columns is-mobile">
        <div
          class="column arena-background text-white px-5 mx-3"
          v-for="(c, i) in columns"
          :key="i"
        >
          <h2 class="is-size-2 is-size-3-touch has-text-centered">
            {{ c.rates }}
          </h2>
          <div v-for="(card, i) in c.cards" :key="i">
            <b-image
              v-if="card.cardImg"
              class="img-smjestaj"
              :src="require(`@/assets/img-new/cards/${card.cardImg}`)"
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
  // import api from '@/plugins/axios';

  export default {
    data() {
      return {
        // columns: [],
        columns: [
          {
            rates: '2-12 rata',
            cards: [
              {
                cardImg: 'raiffeisenmastercard.webp',
                cardName: 'Raiffeisen bank, MasterCard, Visa',
              },
              {
                cardImg: 'erstemaestro.webp',
                cardName: 'Erste Plus',
              },
            ],
          },
          {
            rates: '2-24 rate',
            cards: [
              {
                cardImg: 'zagrebackamaestro.webp',
                cardName: 'Zagrebačka banka, Maestro',
              },
              {
                cardImg: 'visapremium.webp',
                cardName: 'Visa Premium',
              },
            ],
          },
          {
            rates: '2-36 rata',
            cards: [
              {
                cardImg: 'pbz.webp',
                cardName: 'PBZ Visa Inspire, Maestro',
              },
              {
                cardImg: 'mastercard.webp',
                cardName: 'Zagrebačka banka MasterCard, Visa',
              },
              {
                cardImg: 'diners.webp',
                cardName: 'Diners',
              },
            ],
          },
          {
            rates: '24-60 rata',
            cards: [
              {
                cardImg: 'visapremium.webp',
                cardName: 'Visa Premium potrošački kredit',
              },
            ],
          },
        ],
      };
    },

    //   methods: {
    //     getCards() {
    //       api
    //         .get('15c3f4b1-4d6c-42ee-b2fa-d7ee861f1f25')
    //         .then((response) => {
    //           this.columns = response.data.columns;
    //         })
    //         .catch((error) => {
    //           this.$buefy.toast.open({
    //             message: 'Error: ' + error,
    //             type: 'is-danger',
    //           });
    //         });
    //     },
    //   },

    //   created() {
    //     this.getCards();
    //   },
  };
</script>

<style scoped>
  .img-smjestaj {
    width: 222px;
    margin: 0 auto;
  }
</style>