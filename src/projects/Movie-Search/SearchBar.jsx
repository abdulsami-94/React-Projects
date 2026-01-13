function SearchBar({ query, setQuery, onSearch }) {
    return (
        <div>
            <input className="searchBox"
            value={query}
            onChange={e => setQuery(e.target.value)}
            />
            <button onClick={onSearch}>Search</button>
        </div>
    );
}

export default SearchBar;