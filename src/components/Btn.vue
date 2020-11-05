<template>
  <section class="px-5 py-5">
    <div class="container has-text-centered">
      <b-button tag="a" href="#maildiv" class="btn-big">
        {{ btnText }}
      </b-button>
    </div>
  </section>
</template>

<script>
  import api from '@/plugins/axios';

  export default {
    data() {
      return {
        btnText: '',
      };
    },

    methods: {
      getBtn() {
        api
          .get('fef7385a-6a1b-402f-85f7-1fddabee3a55')
          .then((response) => {
            this.btnText = response.data.btnText;
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
      this.getBtn();
    },
  };
</script>

<style scoped>
  .btn-big {
    font-weight: 500;
    border: 2px solid #cacac7;
    width: 80%;
    font-size: 30px;
    background-color: #8bc63f;
    color: white;
    transition-duration: 500ms;
    height: 1.8em !important;
  }

  .btn-big:hover {
    font-weight: 500;
    border: 2px solid #8bc63f;
    width: 80%;
    font-size: 30px;
    background-color: white;
    color: #8bc63f;
    transition-duration: 500ms;
  }
</style>