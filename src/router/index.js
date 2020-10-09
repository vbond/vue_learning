import Vue from "vue";
import VueRouter from "vue-router";
import SearchPage from "@/views/SearchPage.vue";
import MovieDetailsPage from '@/views/MovieDetailsPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SearchPage",
    component: SearchPage
  },
  {
    path: '/movie/:id(\\d+)',
    name: 'MovieDetailsPage',
    component: MovieDetailsPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    window.scrollTo(0, 0)
  }
});

export default router;
