export function getStaticProps() {
  //const min = 1000;
  //const max = 10000;

  return {
    revalidate: 7, // segundos
    props: {
      numero: Math.random(),
    },
  };
}

export default function Estatico3(props) {
  return (
    <div>
      <h1>Estático #03</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}
