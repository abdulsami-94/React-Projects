import { useState } from "react";
import "./Movie.css";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import Header from "./Header";

function App() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);

    async function searchMovies() {
        // Removed API call for local learning
        setMovies([]); 
        setLoading(false);
    }

    return (
        <>
        <Header />
        <SearchBar
            query={query}
            setQuery={setQuery}
            onSearch={searchMovies}
        />

        {loading && <p>Loading...</p>}

        {!loading && movies.length === 0 && <p>No Movies Found</p>}

        <MovieList movies={movies} />
        </>
    );
}

export default App;