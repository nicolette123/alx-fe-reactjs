import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

const PostsComponent = () => {
  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useQuery('posts', fetchPosts, {
    staleTime: 5000,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching posts</p>;
  }

  return (
    <div>
      <button onClick={() => refetch()}>Refetch Posts</button>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
