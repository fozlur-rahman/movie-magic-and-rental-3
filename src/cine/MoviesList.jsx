import { getAllMovies } from "../data/movies";
import MovieCard from "./MovieCard";

function MoviesList() {
    const movies = getAllMovies();
    return (
        <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}></MovieCard>
                ))}
            </div>
        </div>
    );
}

export default MoviesList;
