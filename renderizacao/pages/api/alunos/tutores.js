export default function handler(req, resp) {
  resp.status(200).json([100, 200, 300, 400]);
}
