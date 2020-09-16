<template>

    <div class="movie">
        <figure>
            <img :src="image">
            <figcaption>
                <div class="row">
                    <div class="col-sm-9"><h4 class="text-secondary font-weight-light">{{ name }}</h4>
                        <p class="text-secondary font-weight-light">{{ genre }}</p></div>
                    <div class="col-sm-3 float-right">
                        <button type="button" class="btn btn-sm btn-outline-secondary float-right">{{ year }}
                        </button>
                    </div>
                </div>
            </figcaption>
        </figure>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </div>
                       
</template>

<script>


export default {
  name: 'Movie',

  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
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
    }
  },

};
</script>

<style scoped>

.movie figure {
    width: 354px;
    height: 100%;
    margin: 0 2px 5px;
    padding: 15px 15px 10px;
    transition: opacity .4s ease-in-out;
    display: inline-block;
}
.movie figure img {
    width: 324px;
    height: auto;
    padding-bottom: 15px;
    margin-bottom: 5px;
}
.movie figure figcaption {
    font-size: .9rem;
    color: #444;
    line-height: 1.5;
}
.movie {
    background-color: #232323;
}

</style>