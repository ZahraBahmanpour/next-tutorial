import { useRouter } from "next/router";

export default function Products({ products }) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} {product.price}
          </li>
        ))}
      </ul>
      <h3 onClick={handleClick}>Back</h3>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const products = await response.json();
  console.log("getStaticProps");
  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}
