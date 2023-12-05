import { reactive } from 'vue'

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=b053df27f8e0f58b0d19b93a5fd4cd8c&query=ritorno+al+futuro",
    movies: [],
    searchString: ""
});