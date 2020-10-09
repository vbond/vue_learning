import Vue from "vue";
import Vuex from "vuex";
import movieApi from '../api/movieApi'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    similarMovies: [],
    movieById: {},
    searchParams: {},
    isSearchByTitle: true,
    isSortByRate: false
  },

  mutations: {
    SET_SEARCH_PARAMS: (state, params) => {
      state.searchParams.sortBy = params.sortBy || 'release_date'
      state.searchParams.sortOrder = params.sortOrder || 'desc'
      state.searchParams.search = params.search || ''
      state.searchParams.searchBy = params.searchBy || 'title'
    },

    SET_MOVIE_BY_ID: (state, movie) => {
      state.movieById = movie
    },

    SET_MOVIES: (state, movies) => {
      state.movies = movies
    },

    SET_SIMILAR_MOVIES: (state, movies) => {
      state.similarMovies = movies
    },

    SET_SORT_BY: (state, sortBy) => {
      state.searchParams.sortBy = sortBy
      state.isSortByRate = sortBy === 'vote_average'
    },

    SET_SEARCH_VALUE: (state, searchValue) => {
      state.searchParams.search = searchValue.trim()
    },

    SET_SEARCH_BY: (state, searchBy) => {
      state.searchParams.searchBy = searchBy
      state.isSearchByTitle = searchBy === 'title'
    },
  },

  actions: {
    loadMovies: async context => {
      try {
        const searchParams = context.state.searchParams
        const searchResult = await movieApi.getMovies(searchParams)
        context.commit('SET_MOVIES', searchResult.data.data)
      } catch (err) {
        console.error(err)
      }
    },

    loadMovieDetails: async (context, id) => {
      try {
        const movieData = await movieApi.getMovieById(id)
        context.commit('SET_MOVIE_BY_ID', movieData.data)

        const searchParams = {
          sortBy: 'release_date',
          sortOrder: 'desc',
          search: movieData.data.genres[0],
          searchBy: 'genres'
        };
        const searchResult = await movieApi.getMovies(searchParams)
        context.commit('SET_SIMILAR_MOVIES', searchResult.data.data)
      } catch (err) {
        console.error(err)
      }
    }
  },

  modules: {}
});
