<template>
  <section class="px-5 py-5">
    <div class="container">
      <div class="columns is-vcentered is-desktop">
        <div class="column is-half-desktop">
          <b-image
            v-if="infoimage"
            :src="img_url + data.infoImage"
            webp-fallback=".jpg"
          ></b-image>
        </div>
        <div class="column is-half-desktop px-5 py-5">
          <p class="mb-2">
            ŠTO SU ZUBNI IMPLANTATI Zubni implantati su posebno izrađeni
            titanski vijci koji se kirurškim postupkom ugrađuju u kost gornje
            i/ili donje čeljusti u slučaju nedostatka prirodnih zuba koje uz
            protetski nadomjestak savršeno zamjenjuju. Titan je biokompatibilan
            materijal koji kost prihvaća kao prirodni materijal. Za razliku od
            postavljanja zubnog mosta za koji je potrebno izbrusiti dva zuba
            nosača, kod implantacije nema potrebe za brušenjem susjednih,
            zdravih zuba. Uz dobro opće zdravlje, održavanje dobre oralne
            higijene i redovite posjete stomatologu, implantati traju doživotno,
            a željeni izgled zubi je osiguran jer estetski i funkcionalno
            potpuno zamjenjuju prirodni zub. POSTUPAK UGRADNJE ZUBNIH IMPLANTATA
            Najprije se moraju izvaditi postojeći zubi ako još postoji te se
            nakon toga ugrađuju titanski vijci. Nakon toga slijedi period kojeg
            nazivamo oseointegracija u kojem dentalni implantat srasta s kosti.
            Nakon što okolno koštano tkivo sraste s implantatom, na zub se
            stavlja gingiva-former koji oblikuje zubno meso za zubni
            nadomjestak. Tjedan do dva nakon zarastanja i oblikovanja zubnog
            mesa na implantat se postavlja suprastruktura. Zadnja faza je
            postavljanje keramičke krunice, proteze ili mosta čime se dobiva
            vrhunsko funkcionalno i estetsko rješenje.
          </p>
          <b-image
            class="certifikati"
            :src="require('@/assets/img/certifikati.webp')"
            :webp-fallback="require('@/assets/img/certifikati.jpg')"
          ></b-image>
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
        data: {},
      };
    },

    methods: {
      getInfo() {
        api
          .get('45b2f6ed-1a8d-4146-939e-6b8484d41b74')
          .then((response) => {
            this.data = response.data;
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
      this.getInfo();
    },
  };
</script>

<style scoped>
  .certifikati {
    max-width: 300px;
  }
</style>
