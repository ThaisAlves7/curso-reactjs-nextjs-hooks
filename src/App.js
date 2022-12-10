import P from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import './App.css';

const Post = ({ post }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

function App() {
  console.log('Pai renderizou');

  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  // ComponentDidMount => Invocado imediatamente após um componente ser montado
  useEffect(() => {
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((response) => setPosts(response));
    }, 5000);
  }, []);

  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {/* useMemo => Memoriza um componente[ ou função de callback] completamente */}
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => <Post key={post.id} post={post} />)
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
}

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

export default App;
