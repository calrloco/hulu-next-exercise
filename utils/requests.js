const API_KEY = process.env.API_KEY

export default {
    fetchTrending:{
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}`
    },
    fetchTop:{
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}`
    },
    fetchAction:{
        title: 'Action',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedies:{
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorror:{
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomance:{
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery:{
        title: 'Mystery',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi:{
        title: 'Sci fi',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern:{
        title: 'Western',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation:{
        title: 'Western',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchTv:{
        title: 'Tv movies',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
}