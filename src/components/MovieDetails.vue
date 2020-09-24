<template>
<div class = ".movie-details">
    <header class="movie-header">

        <logo-header />

        <div class="row">
            <div class="col col-md-4 text-center">
                <img class="movie-img" :src="image">
            </div>
            <div class="col col-md-7">
                <div class="row">
                    <div class="col">
                        <h1 class="text-light font-weight-light text-uppercase">{{name}}
                            &nbsp;&nbsp;<span class="badge badge-pill badge-outline-info align-middle font-weight-light">{{rating}}</span>
                        </h1>
                    </div>
                </div>
                <div class="row">
                    <div  class="col">
                        <p class="text-secondary font-weight-light">Oscar winning movie</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-md-2">
                        <h4 class="text-danger font-weight-light">{{ year }}</h4>
                    </div>
                    <div class="col col-md-2">
                        <h4 class="text-danger font-weight-light">{{ duration }}min</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p class="text-secondary">{{description}}</p>
                    </div>
                </div>
            </div>
        </div>

    </header>

        <div class="container">

            <div class="row filter-header text-light">
                <div class="col col-lg-6">
                    <h7 class="align-middle font-weight-normal">Films by <span class="font-weight-bold">{{genre}}</span> genre</h7>
                </div>
            </div>

            <div class="row">
                <div class="d-flex align-content-stretch flex-wrap movies justify-content-around">
                    <movie image="https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg" name="Transformers 7" genre="Action" year="2019"/>
                    <movie image="https://image.tmdb.org/t/p/w500/aMETsaNNcDc6g5ZatQtVbySnSaA.jpg" name="Untitled Avengers" genre="Action" year="2019"/>
                    <movie image="https://image.tmdb.org/t/p/w500/6qmsupE0opYPIaBGe7T5D2FBzLs.jpg" name="X-Men: Dark Phoenix" genre="Action" year="2019"/>
                    <movie image="https://image.tmdb.org/t/p/w500/sshNRCbtU2ON8SiWLycQzr05doX.jpg" name="Aquaman" genre="Action" year="2018"/>
                    <movie image="https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg" name="Jurassic World: Fallen Kingdom" genre="Action" year="2018"/>
                </div>
            </div>

            <logo-footer />
        </div>
    </div>
</template>

<script>

import LogoHeader from './LogoHeader';
import LogoFooter from './LogoFooter';
import Movie from './Movie';
import './styles.css';

export default {
  name: 'MovieDetails',

  components: { LogoHeader, LogoFooter, Movie },

  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    }
  },

 
};
</script>
