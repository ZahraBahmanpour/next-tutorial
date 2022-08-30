import { useRouter } from "next/router";

export default function PostDetails() {
  const router = useRouter();
  return <h1>Post {router.query.postId}</h1>;
}
