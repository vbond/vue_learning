import Movie from '../components/Movie';

export default {
  title: 'Movie',
  component: Movie,
};


export const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Movie },
  template: '<movie image="https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg" name="Transformers 7" genre="Action" year="2019"/>'
})

