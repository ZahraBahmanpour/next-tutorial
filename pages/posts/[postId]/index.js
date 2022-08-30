import { useRouter } from "next/router";

export default function PostDetails({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1>Post {post.title}</h1>
      <p>{post.body}</p>
      <i>{post.author}</i>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    "https://6300a18859a8760a757d441c.mockapi.io/posts/" + params.postId
  );
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  // const response = await fetch(
  //   "https://6300a18859a8760a757d441c.mockapi.io/posts"
  // );
  // const posts = await response.json();
  // const paths = posts.map((post) => {
  //   return {
  //     params: { postId: `${post.id}` },
  //   };
  // });
  // return {
  //   paths,
  //   fallback: false,
  // };
  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    fallback: true,
  };
}
