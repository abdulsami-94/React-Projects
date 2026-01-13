function MovieList({ movies }) {
    return (
        <div>
            {movies.map(movie => (
                <p key={movie.id}>{movie.title}</p>
            ))}
        </div>
    );
}

export default MovieList;