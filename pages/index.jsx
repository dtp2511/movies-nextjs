import { getCategories } from '../resouces/data';
import { getMovies } from '../actions';
import { SideMenu, Carousel, MovieList } from '../components';
import { useState } from 'react';
import '../styles/index.scss';
const Home = props => {
  const { images, movies, categories } = props;
  const [filter, setFilter] = useState('');

  const _filterMovies = movies => {
    if (filter === 'all') return movies;
    return movies.filter(m => m.genre && m.genre.includes(filter));
  };

  const _onChangeCategory = category => {
    setFilter(category);
  };
  return (
    <div className='home-page'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <SideMenu
              changeCategory={_onChangeCategory}
              categories={categories}
              activeCategory={filter}
            />
          </div>

          <div className='col-lg-9'>
            <Carousel images={images} />
            <div className='row'>
              <MovieList movies={_filterMovies(movies)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const movies = await getMovies();

  const images = movies.map(movie => ({
    id: `image-${movie.id}`,
    url: movie.image,
    name: movie.name,
    cover: movie.cover,
  }));
  const categories = await getCategories();
  return {
    movies,
    images,
    categories,
  };
};

export default Home;
