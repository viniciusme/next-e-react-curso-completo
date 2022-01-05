import { useRouter } from "next/dist/client/router";
import Link from "next/dist/client/link";

export default function Params() {
  const router = useRouter();
  const id = router.query.id;
  const nome = router.query.nome;

  console.log(router);

  return (
    <div>
      <h1>
        Rotas Params: {id} e {nome}
      </h1>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
  );
}
