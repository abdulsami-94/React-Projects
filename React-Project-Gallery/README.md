# React Project Gallery

This is a single React application that serves as a gallery for multiple sub-projects. Each sub-project is implemented as an isolated React component, and navigation between projects is handled using React Router.

## Folder Structure

- `src/`: Contains all the source code for the React application.
  - `projects/`: Houses individual project components, each in their own subdirectory. This keeps sub-projects isolated and organized.
    - `Counter/`: Contains the Counter project component and its styles.
    - `Weather/`: Contains the Weather project component and its styles.
    - `MovieSearch/`: Contains the Movie Search project component and its styles.
  - `data/`: Stores data files, such as the projects metadata and component references.
  - `pages/`: Contains page-level components that represent different views in the app.
    - `Home.jsx`: Displays the project gallery list.
    - `ProjectPage.jsx`: Loads and displays a specific project based on the route parameter.
  - `components/`: Reusable UI components shared across the application.
    - `Navbar.jsx`: Navigation bar component.
    - `ProjectCard.jsx`: Component for displaying project information in the gallery.
  - `App.jsx`: Main application component with routing setup.
  - `main.jsx`: Entry point for the React application.
  - `index.css`: Global styles for the application.

- `public/`: Static assets served by the application.
- `package.json`: Project dependencies and scripts.
- `vite.config.js`: Vite configuration for the build tool.
- `eslint.config.js`: ESLint configuration for code linting.
- `index.html`: Main HTML file for the application.