import Counter from '../projects/Counter/Counter';
import App from '../projects/Movie-Search/App';

const projects = [
  {
    id: 'counter',
    title: 'Counter Program',
    description: 'Basic counter using React State',
    component: Counter,
  },
  {
    id: 'Movie',
    title: 'Movie Search App',
    description: 'Simple Movie Search App using TMDB API',
    component: App,
  }
];

export default projects;