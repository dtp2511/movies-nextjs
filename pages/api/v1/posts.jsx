import axios from 'axios';
export default async (req, res) => {
  if (req.method === 'POST') {
    console.log(req.body);
    return res.json({
      status: 'Succesfully Add !',
    });
  } else {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    const posts = response.data;
    return res.json(posts.slice(0, 10));
  }
  ``;
};
