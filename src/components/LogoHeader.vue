<template>
  
  <div class="row">
        <div class="col">
            <img @click="onClick" src="@/assets/movielogo.png" class="logo" alt="Netflix Roulette logo">
        </div>
    </div>

</template>

<script>
import './styles.css';

export default {
  name: 'LogoHeader',    

  methods: {
    onClick () {
      this.$router.push('/')
    }
  }

};
</script>

<style scoped>
img {
  cursor: pointer;
}
</style>
