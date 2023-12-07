import { reactive } from 'vue'

export const store = reactive({
    filmsUrl: "https://api.themoviedb.org/3/search/movie",
    seriesUrl: "https://api.themoviedb.org/3/discover/tv",
    apiKey: "b053df27f8e0f58b0d19b93a5fd4cd8c",
    films: [],
    series: [],
    searchString: ""
});


// import axios from 'axios';

// const options = {
//     method: 'GET',
//     url: '',
//     params: {
//         'air_date.gte': 'lord%20of%20the%20rings',
//         include_adult: 'false',
//         include_null_first_air_dates: 'false',
//         language: 'en-US',
//         page: '1',
//         sort_by: 'popularity.desc'
//     },
//     headers: { accept: 'application/json' }
// };

// axios
//     .request(options)
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.error(error);
//     });