<template>

<div class="container">

    <div class="row filter-header text-light">
        <div class="col col-lg-6">
            <h7 class="align-middle font-weight-bold">X movie found</h7>
        </div>
        <div class="col col-lg-2 text-right align-items-center">
            <h5 class="align-bottom">sort by</h5>
        </div>
        <div class="col col-lg-3">
            <div class="btn-group" role="group" aria-label="Search by">
                <button type="button" class="btn btn-danger text-uppercase">Release date</button>
                <button type="button" class="btn btn-secondary text-uppercase">rating</button>
            </div>
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

</div>                   


</template>

<script>

import Movie from './Movie';
import './styles.css';

export default {
  name: 'SearchResult',

  components: { Movie },

};
</script>
