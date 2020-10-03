<template>
<div class="container">
    <div class="row filter-header text-light">
        <div class="col col-lg-6">
            <h6 class="align-middle font-weight-bold">{{movies.length}} movie(s) found</h6>
        </div>
        <div class="col col-lg-2 text-right align-items-center">
            <h5 class="align-bottom">sort by</h5>
        </div>
        <div class="col col-lg-3">
            <div class="btn-group" role="group" aria-label="Search by">
                <button type="button" class="btn text-uppercase" :class="isSortByRate ? 'btn-secondary' : 'btn-danger'"
                 @click="releaseDateClick" >Release date</button>
                <button type="button" class="btn text-uppercase" :class="isSortByRate ? 'btn-danger' : 'btn-secondary'"
                 @click="ratingClick" >Rating</button>
            </div>
        </div>
    </div>
    <div v-if="movies.length" class="row">
      <div class="d-flex align-content-stretch flex-wrap movies justify-content-around">
        <movie v-for="movie in movies" :key="movie.id" :movieData="movie" />
      </div>
    </div>
    <div v-else class="row">
        <empty-results />
    </div>
</div>
</template>

<script>
import Movie from "./Movie";
import EmptyResults from "./EmptyResults";
import { mapMutations, mapState } from "vuex";

export default {
  name: "SearchResult",

  components: { Movie, EmptyResults },

  computed: {
    ...mapState(['isSortByRate', 'movies'])
  },

  methods: {
    ...mapMutations(['SET_SORT_BY_RATE', 'SORT_SEARCH_RESULT']),
    releaseDateClick () {
        this.SET_SORT_BY_RATE(false);
        this.SORT_SEARCH_RESULT();
    },
    ratingClick () {
        this.SET_SORT_BY_RATE(true);
        this.SORT_SEARCH_RESULT();
    }
  }

};
</script>

<style src="./styles.css"/>