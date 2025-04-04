import { useMovies } from './../hooks/useMovies';
import styles from './movies.module.css';
import { MovieItem } from './../components/MovieItem/MovieItem';

export function Movies(){
    const movies = useMovies();
    return (
        <section className={styles.moviesContainer}>
            <h1>Filmes populares</h1>
            <div className={styles.moviesList}>
                {movies.map((movie) =>  <MovieItem key={movie.id} movie={movie}></MovieItem>)}
            </div>
        </section>
    );
}
