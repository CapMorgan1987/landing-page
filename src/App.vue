<template>
  <div id="app">
    <app-header />
    <app-hero />
    <app-services />
    <app-payments />
    <app-mail />
    <app-info />
    <app-banner />
    <app-transport />
    <app-btn />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Hero from './components/Hero.vue';
  import Services from './components/Services.vue';
  import Payments from './components/Payments.vue';
  import Button from './components/Btn.vue';
  import Mail from './components/Mail.vue';
  import Info from './components/Info.vue';
  import Banner from './components/Banner.vue';
  import Transport from './components/Transport.vue';

  export default {
    name: 'App',
    components: {
      'app-header': Header,
      'app-hero': Hero,
      'app-services': Services,
      'app-payments': Payments,
      'app-btn': Button,
      'app-mail': Mail,
      'app-info': Info,
      'app-banner': Banner,
      'app-transport': Transport,
    },
  };
</script>

<style>
  body {
    font-family: 'Montserrat', sans-serif !important;
    color: #58585b;
    line-height: 1.6;
  }

  .font400 {
    font-weight: 400;
  }

  .arena-background {
    background-color: #8bc63f;
  }
  .arena-background-light {
    background-color: #8bc63fcb;
  }
  .text-green {
    color: #8bc63f;
  }

  .text-white {
    color: white;
  }

  .btn-arena {
    background-color: #8bc63f !important;
    color: white !important;
    border: 2px solid white !important;
    transition-duration: 500ms;
  }
  .btn-arena:hover {
    background-color: white !important;
    color: #8bc63f !important;
    border: 2px solid #8bc63f !important;
  }
</style>
