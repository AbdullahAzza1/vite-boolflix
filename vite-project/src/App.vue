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

	},
	methods: {
		findLinks() {


			const options = {
				method: 'GET',
				url: 'https://api.themoviedb.org/3/discover/movie',
				params: {
					certification: 'lord%20of%20the%20rings',
					include_adult: 'false',
					include_video: 'false',
					language: 'en-US',
					page: '1',
					sort_by: 'popularity.desc'
				},
				headers: {
					accept: 'application/json',
					Authorization: 'Bearer b053df27f8e0f58b0d19b93a5fd4cd8c'
				}
			};

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
		<AppMain v-for="movies in store.movies" :info="movies" />
	</main>
</template>

<style scoped></style>
