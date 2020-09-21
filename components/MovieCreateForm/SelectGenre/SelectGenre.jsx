import Select from 'react-select';
const options = [
  { value: 'drama', label: 'Drama' },
  { value: 'music', label: 'Music' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'historical', label: 'Historical' },
  { value: 'action', label: 'Action' },
];

const SelectGenre = props => {
  return (
    <Select
      onChange={props.onChange}
      isMulti
      name='colors'
      options={options}
      className='basic-multi-select'
      classNamePrefix='select'
    />
  );
};

export default SelectGenre;
