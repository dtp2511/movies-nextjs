import React from 'react';
import Link from 'next/link';
import { shorten } from '../../utils';

const MovieList = props => {
  const { movies } = props;

  function renderMovie(movies) {
    return movies.map(movie => (
      <div key={movie.id} className='col-lg-4 col-md-6 mb-4'>
        <div className='card h-100'>
          <Link href='/movies/[id]' as={`/movies/${movie.id}`}>
            <a>
              <img
                className='card-img-top'
                src={movie.image}
                alt='Movie Card'
              />
            </a>
          </Link>
          <div className='card-body'>
            <h4 className='card-title'>
              <Link href='/movies/[id]' as={`/movies/${movie.id}`}>
                <a>{movie.name}</a>
              </Link>
            </h4>
            <div className='movie-genre'>{movie.genre}</div>
            <p className='card-text'>{shorten(movie.description)}</p>
          </div>
          <div className='card-footer'>
            <small className='text-muted'>{movie.rating}</small>
          </div>
        </div>
      </div>
    ));
  }

  return <>{renderMovie(movies)}</>;
};

export default MovieList;
