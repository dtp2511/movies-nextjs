import { getPosts } from '../../actions';

const Posts = props => {
  const { posts } = props;
  return (
    <div className='container'>
      <h1>i am post page</h1>
      {JSON.stringify(posts, null, 2)}
    </div>
  );
};

Posts.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts };
};

export default Posts;
