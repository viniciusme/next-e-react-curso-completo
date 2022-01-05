import { useRouter } from "next/dist/client/router";
import Link from "next/dist/client/link";

export default function Buscar() {
  const router = useRouter();
  const codigo = router.query.codigo;

  return (
    <div>
      <h1>Rotas / {codigo} / Buscar</h1>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
  );
}
