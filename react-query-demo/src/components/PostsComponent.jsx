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
    error,
    refetch,
  } = useQuery('posts', fetchPosts, {
    staleTime: 5000,
    cacheTime: 1000 * 60 * 5,          // 5 minutes
    refetchOnWindowFocus: false,       // disables auto refetch on window focus
    keepPreviousData: true,            // keeps previous data while fetching new
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    console.log(error);
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
