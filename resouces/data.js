const data = [
  {
    id: '1',
    name: 'The Shawshank Redemption',
    releaseYear: 1994,
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    longDesc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque non nobis, impedit veritatis quia, consectetur velit ea error ducimus totam ipsam, nisi dolorem voluptatum ut perspiciatis ex quidem nesciunt assumenda.',
    rating: 4.8,
    genre: 'drama',
    cover:
      'https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    image:
      'https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg',
  },
  {
    id: '2',
    name: 'The Dark Knight',
    releaseYear: 2008,
    description:
      'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    longDesc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad itaque excepturi dignissimos laudantium obcaecati quam blanditiis earum veniam, dicta, velit, quo tenetur dolore ducimus repellat neque, architecto magni in cum.',
    rating: 4.7,
    genre: 'action, crime, drama',
    cover:
      'https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    image:
      'https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600',
  },
  {
    id: '3',
    name: 'Lord of the Rings',
    releaseYear: 2004,
    description:
      'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    longDesc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, beatae aliquid excepturi! Distinctio temporibus modi eos in facere eum, eligendi incidunt? Eligendi, ea, explicabo. Repellat laboriosam suscipit natus totam dolores?',
    rating: 4.9,
    genre: 'adventure, drama, fantasy',
    cover:
      'https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80',
    image:
      'https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600',
  },
];
const CATEGORY_DATA = [
  { id: 'c-0', name: 'all' },
  { id: 'c-1', name: 'drama' },
  { id: 'c-2', name: 'action' },
  { id: 'c-3', name: 'adventure' },
  { id: 'c-4', name: 'historical' },
];
export const getMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 50);
  });
};

export const getMovieById = id => {
  return new Promise(resolve => {
    const movieIndex = data.findIndex(movie => movie.id === id);
    const movie = data[movieIndex];
    setTimeout(() => resolve(movie), 50);
  });
};

export const getCategories = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(CATEGORY_DATA), 50);
  });
};

export const createMovie = movie => {
  return new Promise(resolve => {
    movie.id = Math.random()
      .toString(36)
      .substr(2, 7);
    data.push(movie);
    setTimeout(() => resolve(data), 50);
  });
};
