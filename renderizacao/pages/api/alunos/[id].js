export default function handler(req, res) {
  const id = +req.query.id;

  res.status(200).json({
    id,
    name: `Vinicius Mendes ${id}`,
    email: `vini${id}@vinimendes.com.br`,
  });
}
