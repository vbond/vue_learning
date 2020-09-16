import MovieDetails from '../components/MovieDetails';

export default {
  title: 'Movie Details',
  component: MovieDetails,
};


export const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MovieDetails },
  template: 
   '<movie-details image="https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg" name="Transformers 7" genre="Action" year="2019" ' +
   'description = "Pulp Fiction is a 1994 American neo-noir black comedy crime drama film" rating="5" duration="155"/>'
})

