<template>
  <div>
    <movie-details :movieData="movie" :similarMovies="similarMovies" />
  </div>
</template>

<script>
import MovieDetails from "@/components/MovieDetails";
import movies from "@/assets/movies.json";

export default {
  name: "MovieDetailsPage",

  components: { MovieDetails },

  computed: {
    movie() {
      return movies.find(movie => `${movie.id}` === this.$route.params.id);
    },
    similarMovies() {
      const genres = movies.find(movie => `${movie.id}` === this.$route.params.id).genres;
      return movies.filter(movie => movie.genres
        .filter(genre => genres.includes(genre))
        .length && (`${movie.id}` !== this.$route.params.id)
      );
    }
  }
};
</script>
