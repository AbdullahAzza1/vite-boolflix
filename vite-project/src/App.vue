<script >
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from "./store.js";

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store,
    }
  }
}



</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped></style>
