import Vue from "vue";
import Vuex from "vuex";
import movies from "@/assets/movies.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: movies
  },
  getters: {
    movieById: state => id => {
      return state.movies.find(movie => `${movie.id}` === id);
    },
    similarMovies: (state, getters) => id => {
      const genres = getters.movieById(id).genres;
      return state.movies.filter(movie => movie.genres
        .filter(genre => genres.includes(genre))
        .length && (`${movie.id}` !== id)
      );
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
