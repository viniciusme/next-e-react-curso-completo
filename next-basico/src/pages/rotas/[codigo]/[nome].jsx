import { useRouter } from "next/dist/client/router";
import Link from "next/dist/client/link";

export default function CodigoENome() {
  const router = useRouter();
  const codigo = router.query.codigo;
  const nome = router.query.nome;

  return (
    <div>
      <h1>
        Rotas / {codigo} / {nome}
      </h1>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
  );
}
