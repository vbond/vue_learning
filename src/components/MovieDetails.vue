<template>
<div class = ".movie-details">
    <header class="movie-header">

        <logo-header />

        <div class="row">
            <div class="col col-md-4 text-center">
                <img class="movie-img" :src="movieData.poster_path">
            </div>
            <div class="col col-md-7">
                <div class="row">
                    <div class="col">
                        <h1 class="text-light font-weight-light text-uppercase">{{ movieData.title }}
                            &nbsp;&nbsp;<span class="badge badge-pill badge-outline-info align-middle font-weight-light">{{ movieData.vote_average }}</span>
                        </h1>
                    </div>
                </div>
                <div class="row">
                    <div  class="col">
                        <p class="text-secondary font-weight-light">Oscar winning movie</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-md-3">
                        <h4 class="text-danger font-weight-light">{{ movieData.release_date }}</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-md-3">
                        <h4 class="text-danger font-weight-light">{{ movieData.runtime | toMinutes }}</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p class="text-secondary">{{movieData.overview}}</p>
                    </div>
                </div>
            </div>
        </div>

    </header>

    <div class="container">

        <div class="row filter-header text-light">
            <div class="col col-lg-6">
                <h6 class="align-middle font-weight-normal">Films by <span class="font-weight-bold">{{movieData.genres ? movieData.genres.join(' & ') : ''}}</span> genre</h6>
            </div>
        </div>

        <div class="row">
            <div class="d-flex align-content-stretch flex-wrap movies justify-content-around">
                <movie v-for="movie in similarMovies" :key="movie.id" :movieData="movie" />
            </div>
        </div>

        <logo-footer />
    </div>
</div>
</template>

<script>
import Vue from "vue";
import LogoHeader from './LogoHeader';
import LogoFooter from './LogoFooter';
import Movie from './Movie';
import toMinutesFilter from '@/filters/toMinutes';

Vue.filter('toMinutes', toMinutesFilter.toMinutes)

export default {
  name: 'MovieDetails',

  components: { LogoHeader, LogoFooter, Movie },

  props: {
    similarMovies: Array,
    movieData: Object
  }
};
</script>

<style src="./styles.css"/>
