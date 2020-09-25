<template>
  <div>
    <search-bar />
    <search-result />
    <logo-footer />
  </div>

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
