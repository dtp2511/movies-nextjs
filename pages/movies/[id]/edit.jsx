import React from 'react';
import { MovieCreateForm } from '../../../components';
import { getMovieById, updateMovie } from '../../../actions';
import Router from 'next/router';
const Edit = props => {
  const { movie } = props;
  const _onHandleUpdateMovie = movie => {
    updateMovie(movie).then(_ => {
      Router.push(`/movies/${movie.id}`);
    });
  };
  return (
    <div className='container'>
      <h1>Edit the movie</h1>
      <MovieCreateForm
        submitButton='Update'
        initialData={movie}
        handleFormSubmit={_onHandleUpdateMovie}
      />
    </div>
  );
};
Edit.getInitialProps = async ({ query }) => {
  const { id } = query;
  const movie = await getMovieById(id);
  return { movie };
};
export default Edit;
