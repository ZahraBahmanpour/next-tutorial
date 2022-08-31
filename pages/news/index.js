import { useRouter } from "next/router";
import SportNewsList from "../../components/SportNewsList";

export default function News({ news }) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <h1>News</h1>
      <ul>
        {news.map((n) => (
          <li key={n.id}>
            {n.title} {n.category}
          </li>
        ))}
      </ul>
      <SportNewsList />
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
