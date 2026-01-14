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
        if (!query) return;

        setLoading(true);

        const res = await fetch(`/.netlify/functions/tmdb-proxy?q=${encodeURIComponent(query)}`);
        const data = await res.json();

        if (data.error) {
            console.error(data.error);
            setMovies([]);
        } else {
            setMovies(data.results || []);
        }

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