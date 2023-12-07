<script>
import { store } from "./store.js";

export default {
    name: "AppSearch",
    data() {
        return {
            store,
        }
    },
    methods: {
        search() {
            console.log("Cerca: ", this.store.searchString);
            this.$emit("search");
        }
    },
}
</script>

<template>
    <header>
        <div>
            <h1>Boolfix</h1>
            <input type="text" placeholder="search..." v-model="store.searchString" @keyup.enter="$emit('search')">
            <button @click="search">search</button>
        </div>
    </header>
</template>

<style scoped>
header {
    height: 7rem;
    background-color: black;
    display: flex
}
</style>