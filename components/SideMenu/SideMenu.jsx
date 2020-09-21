import { useRouter } from 'next/router';
import { Modal, MovieCreateForm } from '../';
import { createMovie } from '../../actions';
const SideMenu = props => {
  const router = useRouter();
  const { categories, changeCategory, activeCategory } = props;
  const _onCreateMovie = movie => {
    createMovie(movie).then(_ => {
      router.push('/');
    });
  };

  return (
    <div>
      <Modal hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={_onCreateMovie} />
      </Modal>
      <h1 className='my-4'>Shop Name</h1>
      <div className='list-group'>
        {categories.map(category => (
          <a
            onClick={() => changeCategory(category.name)}
            key={category.id}
            href='#'
            className={`list-group-item ${
              activeCategory === category.name ? 'active' : 'null'
            }`}
          >
            {category.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
