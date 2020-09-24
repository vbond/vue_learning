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
    </div>
                       
</template>

<script>
import './styles.css';

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
