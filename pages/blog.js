import { useState } from "react";
import { loadPosts } from "../lib/loadPosts";

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

export async function getServerSideProps() {
    console.log("getServerSideProps")
  // Call an external API endpoint to get posts
  const posts = await loadPosts();
  const de = await delay();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

const delay = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("success");
    }, 5000);
  });
};
