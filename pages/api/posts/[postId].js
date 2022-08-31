export default function handler(req, res) {
  console.log(req.query);
  const { postId } = req.query;
}
