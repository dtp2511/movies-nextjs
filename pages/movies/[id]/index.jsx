import { useRouter } from 'next/router';
import { getMovieById, deleteMovie } from '../../../actions';
import { MovieWrapper } from './movie.styles';
const Movie = props => {
  const router = useRouter();
  const { id } = router.query;
  const { movie } = props;

  const _onDeleteMovie = id => {
    deleteMovie(id).then(_ => {
      router.push('/');
    });
  };

  function renderMovie(movie) {
    if (movie) {
      return (
        movie && (
          <div className='container'>
            <div className='jumbotron'>
              <h1 className='display-4'>{movie.name}</h1>
              <p className='lead'>{movie.description}</p>
              <hr />
              <p>{movie.genre}</p>

              <p className='lead'>
                <button
                  className='btn btn-primary btn-lg mr-1'
                  href='#'
                  role='button'
                >
                  Learn more
                </button>
                <button
                  onClick={() => _onDeleteMovie(id)}
                  className='btn btn-danger btn-lg mr-1'
                  href='#'
                  role='button'
                >
                  Delete
                </button>
                <button
                  onClick={() => router.push(`/movies/${id}/edit`)}
                  className='btn btn-warning btn-lg'
                  href='#'
                  role='button'
                >
                  Edit
                </button>
              </p>
            </div>
            <p className='desc-text'>{movie.longDesc}</p>
          </div>
        )
      );
    }
  }
  return <MovieWrapper>{renderMovie(movie)}</MovieWrapper>;
};

Movie.getInitialProps = async context => {
  const { id } = context.query;
  const movie = await getMovieById(id);
  return { movie };
};

export default Movie;
