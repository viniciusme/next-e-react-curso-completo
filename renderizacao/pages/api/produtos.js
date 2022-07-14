// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function numeroAleatorio(min = 1, max = 100000) {
  return parseInt(Math.random() * (max - min)) + min;
}

export default function handler(req, res) {
  res.status(200).json([
    { id: numeroAleatorio(), name: "Caneta", preco: 5.6 },
    { id: numeroAleatorio(), name: "Caderno", preco: 15.6 },
    { id: numeroAleatorio(), name: "Borracha", preco: 7.3 },
    { id: numeroAleatorio(), name: "Tesoura", preco: 21.55 },
  ]);
}
