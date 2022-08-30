import { useRouter } from "next/router";

export default function Posts() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <h1>Posts</h1>
      <h3 onClick={handleClick}>Back</h3>
    </>
  );
}
