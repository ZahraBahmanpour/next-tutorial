import { useRouter } from "next/router";

export default function News({ news }) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {news.map((n) => (
          <li key={n.id}>
            {n.title} {n.category}
          </li>
        ))}
      </ul>
      <h3 onClick={handleClick}>Back</h3>
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:4000/news");
  context.res.setHeader("name", ["ali"]);
  const news = await response.json();
  return {
    props: {
      news,
    },
  };
}
