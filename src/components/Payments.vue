<template>
  <section class=" px-5 pb-5 ">
    <div class="container">
      <h2 class="is-size-2 has-text-centered my-5">DOSTUPNI NAČINI PLAĆANJA</h2>
      <div class="columns is-mobile">
        <div
          class="column arena-background text-white px-5 mx-3"
          v-for="(c, i) in cards"
          :key="i"
        >
          <h2 class="is-size-2 is-size-3-touch has-text-centered">{{ c.rates }}</h2>
          <b-image
            v-if="c.cardImg"
            class="img-smjestaj"
            :src="require(`@/assets/img-new/cards/${c.cardImg}`)"
            webp-fallback=".png"
          ></b-image>
          <h3
            v-if="c.cardName"
            class="is-size-4 has-text-centered"
          >
            {{ c.cardName }}
          </h3>
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
      cards: []
      // columns: [
      //   {
      //     rates: "2-12",
      //     cards: [
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
        api.get('b3528ad8-56d2-457a-ac35-b79c9d0f36de')
        .then(response => {
          this.cards = response.data.cards
        })
        .catch(error => {
          this.$buefy.toast.open({
            message: 'Error: ' + error,
            type: 'is-danger'
          })
        })
      }
  },

  created() {
    this.getCards()
  }
}
</script>

<style scoped>
.img-smjestaj {
  width: 222px;
  margin: 0 auto;
}
</style>