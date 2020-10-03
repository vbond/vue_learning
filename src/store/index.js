import Vue from "vue";
import Vuex from "vuex";
import moviesStore from "@/assets/movies.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: moviesStore,
    isSearchByTitle: true,
    isSortByRate: false
  },

  getters: {
    movieById: () => id => {
      return moviesStore.find(movie => `${movie.id}` === id);
    },
    similarMovies: (state, getters) => id => {
      const genres = getters.movieById(id).genres;
      return moviesStore.filter(movie => movie.genres
        .filter(genre => genres.includes(genre))
        .length && (`${movie.id}` !== id)
      );
    }
  },
  mutations: {
    SET_SEARCH_BY_TITLE(state, value) {
      state.isSearchByTitle = value;
    },

    PERFORM_SEARCH(state, searchValue) {
      if (searchValue) {
        if (state.isSearchByTitle) {
          state.movies = moviesStore.filter(movie => movie.title.toLowerCase().includes(searchValue))
        } else {
          state.movies = moviesStore.filter(movie => movie.genres
            .filter(genre => genre.toLowerCase().includes(searchValue))
            .length
          )
        }
      } else {
        state.movies = moviesStore
      }
    },

    SET_SORT_BY_RATE(state, value) {
      state.isSortByRate = value;
    },

    SORT_SEARCH_RESULT(state) {
      if (state.isSortByRate) {
        state.movies = state.movies.sort((a, b) => b.vote_average - a.vote_average)
      } else {
        state.movies = state.movies.sort((a, b) => b.release_date.localeCompare(a.release_date))
      }
    }
  },
  actions: {},
  modules: {}
});
