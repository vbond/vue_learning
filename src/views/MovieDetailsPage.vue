<template>
  <div>
    <movie-details :movieData="movieById" :similarMovies="similarMovies" />
  </div>
</template>

<script>
import MovieDetails from "@/components/MovieDetails";
import { mapState } from "vuex";

export default {
  name: "MovieDetailsPage",

  components: { MovieDetails },

  computed: {
    ...mapState(['movieById', 'similarMovies']),
  },

  async mounted () {
    const id = this.$route.params.id
    await this.$store.dispatch('loadMovieDetails', id)
  }

};
</script>
