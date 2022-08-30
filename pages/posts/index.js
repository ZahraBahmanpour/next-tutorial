import { useRouter } from "next/router";

export default function Posts({ posts }) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <h3 onClick={handleClick}>Back</h3>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://6300a18859a8760a757d441c.mockapi.io/posts"
  );
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}
