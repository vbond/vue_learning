import LazyImageLoad from '@/components/LazyImageLoad'
import ToYear from '@/directives/toYear.js'

export default {
  install: (Vue) => {
    Vue.component('LazyImageLoad', LazyImageLoad)
    Vue.directive('toYear', ToYear)
  }
}
