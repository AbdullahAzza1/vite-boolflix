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
		getMovies() {
			const options = {
				method: 'GET',
				url: this.store.seriesUrl,
				params: {
					certification: 'lord%20of%20the%20rings',
					include_adult: 'false',
					include_video: 'false',
					language: 'en-US',
					page: '1',
					sort_by: 'popularity.desc',
					api_key: 'this.store.apiKey',
					query: 'this.store.searchString'
				},
			};
			const options1 = {
				method: 'GET',
				url: this.store.filmsUrl,
				params: {
					certification: 'lord%20of%20the%20rings',
					include_adult: 'false',
					include_video: 'false',
					language: 'en-US',
					page: '1',
					sort_by: 'popularity.desc',
					api_key: 'this.store.apiKey',
					query: 'this.store.searchString'
				},
			};
			axios.request(options1).then(r => {
				this.store.films = r.data.results
				console.log(options1);
			});
			axios.request(options).then(r => {
				this.store.series = r.data.results
				console.log(options);
			})
		},
	}
}



</script>

<template>
	<header>
		<AppHeader />
		<AppSearch @search="getMovies" />
	</header>
	<main>
		<h2>film</h2>
		<AppMain v-for="film in store.films" :info="film" />
		<h2>serie tv</h2>
	</main>
</template>

<style scoped></style>
