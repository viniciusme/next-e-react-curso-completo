export default function NumeroDisplay(props) {
  const estilo = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "50px",
    borderRadius: "25px",
    backgroundColor: "#222",
    color: "#fff",
    fontSize: "2rem",
    margin: "20px",
  };

  return <div style={estilo}>{props.numero}</div>;
}
