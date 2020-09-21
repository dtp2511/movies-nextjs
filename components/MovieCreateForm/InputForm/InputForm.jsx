import React from 'react';

const InputForm = props => {
  const { label, onChange, textarea, ...otherProps } = props;
  return (
    <div className='form-group'>
      <label htmlFor='description'>{label}</label>
      {textarea ? (
        <textarea onChange={onChange} {...otherProps} />
      ) : (
        <input onChange={onChange} {...otherProps} />
      )}
      {label === 'Rating' && (
        <small id='emailHelp' className='form-text text-muted'>
          Max: 5, Min: 0
        </small>
      )}
    </div>
  );
};

export default InputForm;
