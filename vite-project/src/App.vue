<script >
import AppSearch from './components/Appsearch.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from "./store.js";

export default {
	components: {
		AppMain,
		AppSearch
	},
	data() {
		return {
			store,
		}
	},
	mounted() {
		this.findLinks();
	},
	methods: {
		findLinks() {
			let options = {
				method: 'GET',
				url: 'https://api.themoviedb.org/3/authentication',
				headers: {
					accept: 'application/json',
					Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDUzZGYyN2Y4ZTBmNThiMGQxOWI5M2E1ZmQ0Y2Q4YyIsInN1YiI6IjY1NmRlY2QwYTdlMzYzMDEzYWRlNGUzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P5X9yZQw5w-pgtY5q5LziNWW2Qnjzr8T2yLVoBk6Hlo'
				}
			}
			let ricerca = this.store.apiUrl;

			if (this.store.searchString.length) {
				ricerca += `&by_name=${this.store.searchString}`;
			}

			console.log(ricerca);

			axios.get(ricerca).then(r => {
				this.store.movies = r.data;
			});
		},
	}
}



</script>

<template>
	<header>
		<AppHeader />
		<AppSearch @search="getCharacters" />
	</header>
	<main>
		<AppMain />
	</main>
</template>

<style scoped></style>
