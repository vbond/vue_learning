<template>
  <div>
    <search-bar @searchMovies="searchMovies" />
    <search-result :movies="movies"  @sortMovies="sortMovies" />
    <logo-footer />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import SearchResult from "@/components/SearchResult";
import LogoFooter from "@/components/LogoFooter";
import { mapState } from "vuex";

export default {
  name: "SearchPage",

  components: { SearchBar, SearchResult, LogoFooter },

  computed: {
    ...mapState(['movies'])
  },

  methods: {
    searchMovies (searchOptions) {
      if (searchOptions.searchValue && searchOptions.isTitleSelected) {
      //   this.movies = movies.filter(movie => movie.title.toLowerCase().includes(searchOptions.searchValue))
      } else if (searchOptions.searchValue) {
      //   this.movies = movies.filter(movie => movie.genres
      //     .filter(genre => genre.toLowerCase().includes(searchOptions.searchValue))
      //     .length
      //   )
      } else {
      //   this.movies = movies
      }
    },
    sortMovies (option) {
       if (option === 'release_date') {
      //   this.movies = this.movies.sort((a, b) => b.release_date.localeCompare(a.release_date))
       } else {
      //   this.movies = this.movies.sort((a, b) => b.vote_average - a.vote_average)
       }
    }
  }

};
</script>
