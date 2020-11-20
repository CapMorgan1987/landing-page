<template>
  <section class="px-5 py-5 back-img" id="maildiv">
    <div class="container">
      <div class="columns is-vcentered is-desktop">
        <div class="column is-half-desktop px-5 py-5 has-background-white-ter">
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
            <b-checkbox v-model="terms" type="is-success" required>{{
              data.termsText
            }}</b-checkbox>
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
          .get('9c99f601-c986-4768-8863-c97324610f8c')
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
          .post('9c99f601-c986-4768-8863-c97324610f8c', {
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
  .back-img {
    background-image: url('../assets/img-new/testimonial.webp');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: bottom right;
  }
</style>
