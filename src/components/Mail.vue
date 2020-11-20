<template>
  <section class="px-5 py-5 back-img" id="maildiv">
    <div class="container">
      <div class="columns is-desktop">
        <div class="column is-half-desktop has-text-white mail">
          <div class="px-5 py-5 mail-body">
            <h3>{{ data.headerText }}</h3>
            <b-field>
              <b-input
                v-model="name"
                :placeholder="[[data.namePlaceholder]]"
                required
              ></b-input>
            </b-field>
            <b-field>
              <b-input
                v-model="email"
                type="email"
                :placeholder="[[data.mailPlaceholder]]"
                required
              ></b-input>
            </b-field>
            <b-field>
              <b-input
                v-model="tel"
                :placeholder="[[data.numberPlaceholder]]"
                required
              ></b-input>
            </b-field>
            <b-field>
              <b-input
                v-model="message"
                :placeholder="[[data.messagePlaceholder]]"
                maxlength="200"
                type="textarea"
                required
              ></b-input>
            </b-field>
            <div class="field">
              <b-checkbox
                v-model="terms"
                type="is-success"
                class="hoverGreen"
                required
                >{{ data.termsText }}</b-checkbox
              >
            </div>
            <div class="field">
              <b-checkbox v-model="newsletter" type="is-success">{{
                data.newsletterText
              }}</b-checkbox>
            </div>
            <div>
              <b-button
                expanded
                class="btn-arena"
                :disabled="
                  !terms ||
                  name === '' ||
                  email === '' ||
                  tel === '' ||
                  message === ''
                "
                @click="send()"
                >{{ data.btnText }}</b-button
              >
            </div>
          </div>
        </div>
        <div class="column is-half-desktop px-5"></div>
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
        name: '',
        email: '',
        tel: '',
        message: '',
        terms: false,
        newsletter: false,
      };
    },

    methods: {
      getText() {
        api
          .get('606e360c-51ae-48e0-a0c6-f0861f5b9048')
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
      send() {
        api
          .post('606e360c-51ae-48e0-a0c6-f0861f5b9048', {
            name: this.name,
            email: this.email,
            tel: this.tel,
            message: this.message,
            newsletter: this.newsletter,
          })
          .then((response) => {
            this.$buefy.toast.open({
              message: response.data.mailSent,
              type: 'is-success',
            });
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
      this.getText();
    },
  };
</script>

<style scoped>
  .mail {
    background-color: transparent;
  }

  .mail-body {
    width: 70%;
    background-color: #58585b;
    margin: 50px auto;
  }

  .back-img {
    background-image: url('../assets/img-new/testimonial.webp');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: bottom right;
  }

  .hoverGreen:hover {
    color: #8bc63f;
  }

  @media screen and (max-width: 1024px) {
    .mail-body {
      width: 100%;
      margin: 10px auto;
    }
  }
</style>
