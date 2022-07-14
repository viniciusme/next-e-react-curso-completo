export function getServerSideProps() {
  console.log("[Server] gerando props para o computador...");

  return {
    props: {
      numero: Math.random(),
    },
  };
}

export default function Dinamico1(props) {
  return (
    <div>
      <h1>Dinâmico #01</h1>
      <h3>{props.numero}</h3>
    </div>
  );
}
