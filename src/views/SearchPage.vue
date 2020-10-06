<template>
  <div>
    <search-bar />
    <search-result />
    <logo-footer />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import SearchResult from "@/components/SearchResult";
import LogoFooter from "@/components/LogoFooter";

export default {
  name: "SearchPage",

  components: { SearchBar, SearchResult, LogoFooter },

  async mounted () {
    this.$store.commit('INIT')
    await this.$store.dispatch('loadMovies')
  }

};
</script>
