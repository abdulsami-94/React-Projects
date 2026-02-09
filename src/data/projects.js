import Counter from '../projects/Counter/Counter';
import App from '../projects/Movie-Search/App';
import NotesApp from '../projects/Notes-App/NotesApp';

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
  },
  {
    id: 'Notes',
    title: 'Notes App',
    description: 'Simple Notes App',
    component: NotesApp,
  }
];

export default projects;