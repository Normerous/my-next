import { useState } from "react";

function Blog({ posts }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 onClick={() => setCount((prev) => prev + 1)}>HEllo --{count}--</h1>
      <ul>
        {posts &&
          posts.map((post, i) => (
            <li key={i}>
              {i + 1}.{post.title}
            </li>
          ))}
      </ul>
    </>
  );
}

export default Blog;

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  if (!res.ok) {
    // If there is a server error, you might want to
    // throw an error instead of returning so that the cache is not updated
    // until the next successful request.
    throw new Error(`Failed to fetch posts, received status ${res.status}`)
  }
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  console.log('ssss')
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}