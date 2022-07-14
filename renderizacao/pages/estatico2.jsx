export function getStaticProps() {
  //const min = 1000;
  //const max = 10000;

  return {
    props: {
      numero: Math.random(),
    },
  };
}

export default function Estatico2(props) {
  return (
    <div>
      <h1>Estático #02</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}
