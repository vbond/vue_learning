<template>

<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>Netflix Roulette</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="./css/header.css">
      <link rel="stylesheet" type="text/css" href="./css/body.css">
      <link rel="stylesheet" type="text/css" href="./css/footer.css">
  </head>
  <body>

    <search-bar />
    <search-result />
    <logo-footer />


  </body>
</html>
    


</template>

<script>

import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import LogoFooter from './LogoFooter';

export default {
  name: 'SearchPage',

  components: { SearchBar, SearchResult, LogoFooter },

};
</script>
