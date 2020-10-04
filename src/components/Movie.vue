<template>
    <div class="movie">
        <figure>
            <lazy-image-load @click="onClick" :alt="movieData.title" :src="movieData.poster_path"/>
            <figcaption>
                <div class="row">
                    <div class="col-sm-9"><h4 class="text-secondary font-weight-light">{{ movieData.title }}</h4>
                        <p class="text-secondary font-weight-light">{{ movieData.genres.join(' & ') }}</p></div>
                    <div class="col-sm-3 float-right">
                        <button @click="onClick" type="button" class="btn btn-sm btn-outline-secondary float-right" v-toYear >{{ movieData.release_date }}
                        </button>
                    </div>
                </div>
            </figcaption>
        </figure>
    </div>
</template>

<script>
import urlTemplate from 'url-template';

const movieDetailsURITemplate = urlTemplate.parse("/movie/{id}");

export default {
  name: 'Movie',

  props: {
    movieData: Object
  },

  methods: {
    onClick () {
      this.$router.push(movieDetailsURITemplate.expand({id: this.movieData.id}));
    }
  }

};
</script>

<style src="./styles.css"/>
