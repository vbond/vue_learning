<template>
  
  <div class="col text-center no-found">
    <h2 class="text-light font-weight-light">
      No films found
    </h2>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  </div>

</template>

<script>

export default {
  name: 'EmptyResults'
};

</script>

<style scoped>

.no-found {
    padding: 20px;
    background-color: #232323;
}
</style>