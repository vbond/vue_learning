<template>
  <div>
    <movie-details :movieData="movieById(id)" :similarMovies="similarMovies(id)" />
  </div>
</template>

<script>
import MovieDetails from "@/components/MovieDetails";
import { mapGetters } from "vuex";

export default {
  name: "MovieDetailsPage",

  components: { MovieDetails },

  computed: {
    ...mapGetters(['movieById', 'similarMovies']),
    id () {
      return this.$route.params.id;
    }
  }
};
</script>
