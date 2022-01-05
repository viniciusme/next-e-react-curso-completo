import { useState } from "react";
import ContadorDisplay from "../../components/contadorDisplay";

export default function contador() {
  const [numero, setNumero] = useState(0);

  const subtrairNumero = () => setNumero(numero - 1);
  const somarNumero = () => setNumero(numero + 1);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Contador</h1>
      <ContadorDisplay numero={numero} />
      <div>
        <button onClick={subtrairNumero}>-</button>
        <button onClick={somarNumero}>+</button>
      </div>
    </div>
  );
}
