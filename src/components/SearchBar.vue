<template>
  <header class="search-header">

    <logo-header />
    
    <div class="row justify-content-md-center">
        <div class="col col-lg-10">
            <h2 class="text-light font-weight-light text-uppercase">Find Your Own Movie</h2>
        </div>
    </div>
    <div class="row justify-content-md-center search-box">
        <div class="col col-lg-7">
            <input type="text" class="form-control text-light" placeholder="Search" name="search">
        </div>
        <div class="col col-lg-3">
            <button type="button" class="btn btn-danger btn-block">Search</button>
        </div>

    </div>
    <div class="row justify-content-md-center align-items-center search-by">
        <div class="col col-lg-2">
            <h6 class="font-weight-light text-uppercase text-light align-middle">Search by</h6>
        </div>
        <div class="col col-lg-8">
            <div class="btn-group" role="group" aria-label="Search by">
                <button type="button" class="btn btn-danger text-uppercase">Title</button>
                <button type="button" class="btn btn-secondary text-uppercase">Genre</button>
            </div>
        </div>

    </div>
  </header>

</template>

<script>
import LogoHeader from './LogoHeader';
import './styles.css';

export default {
  name: 'SearchBar',

  components: { LogoHeader },

};
</script>
