import React, { useState, useEffect } from 'react';
import SelectGenre from './SelectGenre/SelectGenre';
import InputForm from './InputForm/InputForm';

const MovieCreateForm = props => {
  const { handleFormSubmit, initialData, submitButton } = props;
  const [isInitialDataLoaded, setIsInitialDataLoaded] = useState(false);
  const [form, setForm] = useState({
    name: '',
    description: '',
    rating: 0,
    image: '',
    cover: '',
    longDesc: '',
    genre: [],
  });

  const { name, description, rating, image, cover, longDesc } = form;

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
      setIsInitialDataLoaded(true);
    }
  }, [isInitialDataLoaded]);

  const _onHandleChange = ({ target: { value, name } }) => {
    setForm({ ...form, [name]: value });
  };

  const _onHandleGenreChange = genreArr => {
    const value = [];
    if (genreArr) {
      genreArr.map(genre => {
        for (let key in genre) if (key === 'value') value.push(genre[key]);
      });
    }
    setForm({ ...form, genre: value.toString() });
  };

  const _submitForm = () => {
    handleFormSubmit({ ...form });
  };

  return (
    <form>
      <InputForm
        label='Name'
        onChange={_onHandleChange}
        name='name'
        className='form-control'
        value={name}
        placeholder='Lord of the Rings'
      />
      <InputForm
        label='Description'
        onChange={_onHandleChange}
        name='description'
        className='form-control'
        value={description}
        placeholder='Lord of the Rings'
      />
      <InputForm
        label='Rating'
        onChange={_onHandleChange}
        name='rating'
        max='5'
        min='0'
        className='form-control'
        value={rating}
        placeholder='Lord of the Rings'
      />

      <InputForm
        label='Image'
        onChange={_onHandleChange}
        name='image'
        className='form-control'
        value={image}
        placeholder='http://.....'
      />

      <InputForm
        label='Cover'
        onChange={_onHandleChange}
        name='cover'
        className='form-control'
        value={cover}
        placeholder='http://.....'
      />

      <InputForm
        label='Long Description'
        onChange={_onHandleChange}
        name='longDesc'
        className='form-control'
        value={longDesc}
        rows='3'
        textarea
      />

      <div className='form-group'>
        <label htmlFor='genre'>Genre</label>
        <SelectGenre onChange={_onHandleGenreChange} />
      </div>
      <button onClick={_submitForm} type='button' className='btn btn-primary'>
        {submitButton || 'Create'}
      </button>
    </form>
  );
};

export default MovieCreateForm;
