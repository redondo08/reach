import { useState } from "react";

const Calculadora = () => {
  const [valor, setvalor] = useState(0);
  const [valor1, setvalor1] = useState(0);
  const [operador, setoperador] = useState(0);
  const [punto, setpunto] = useState(0);

  const numero = (e) => {
    if (valor === 0 && e.target.value != ".") {
      setvalor(e.target.value);
    } else {
      if (e.target.value == "." && punto == 1) {
      } else {
        setvalor(valor + e.target.value);
        setpunto(1);
      }
    }
  };

  const opera = (e) => {
    if (operador == 0) {
      setvalor1(parseFloat(valor));
      setoperador(e.target.value);
      setvalor(0);
      setpunto(0);
    } else {
      setoperador(e.target.value);
    }
  };

  const borrar = () => {
    setvalor(0);
    setoperador(0);
    setpunto(0);
  };

  const res = () => {
    if (operador == "+") {
      setvalor(parseFloat(valor) + valor1);
      setoperador(0);
      setpunto(0);
    }
    if (operador == "-") {
      setvalor(valor1 - parseFloat(valor));
      setoperador(0);
      setpunto(0);
    }
    if (operador == "/") {
      setvalor(valor1 / parseFloat(valor));
      setoperador(0);
      setpunto(0);
    }
    if (operador == "*") {
      setvalor(valor1 * parseFloat(valor));
      setoperador(0);
      setpunto(0);
    }
    if (operador == "%") {
        setvalor((valor1 * parseFloat(valor))/100 );
        setoperador(0);
        setpunto(0);
      }
  };

  const Boton_n = (props) => {
    return (
      <button
        className="number"
        onClick={numero}
        value={props.info}
        id={props.id}
      >
        {props.info}
      </button>
    );
  };

  const Boton_o = (props) => {
    return (
      <button className="operator" onClick={opera} value={props.info}>
        {props.info}
      </button>
    );
  };

  const Boton = (props) => {
    if (props.info == "=") {
      return (
        <button className={props.cl} onClick={res} value={props.info}>
          {props.info}
        </button>
      );
    } else {
      return (
        <button className={props.cl} onClick={borrar} value={props.info}>
          {props.info}
        </button>
      );
    }
  };

  const Pantalla=()=>{
    return(
        <>
        <div className="console">
          <div className="previousNumber">
            <p>{valor}</p>
            <span className="mathSign"></span>
          </div>
          <div className="currentNumber"></div>
        </div>
        </>
    )
  }

  return (
    <>
      <div className="calculator">
        <Pantalla/>
        <div className="keys">
          <Boton cl="clear" info="C" />
          <Boton_o info="%" />
          <Boton_o info="/" />
          <Boton_o info="*" />
          <Boton_n info="7" />
          <Boton_n info="8" />
          <Boton_n info="9" />
          <Boton_o info="-" />
          <Boton_n info="4" />
          <Boton_n info="5" />
          <Boton_n info="6" />
          <Boton_o info="+" />
          <Boton_n info="1" />
          <Boton_n info="2" />
          <Boton_n info="3" />
          <Boton cl="equals" info="=" />
          <Boton_n info="0" id="zero" />
          <Boton_n info="." />
        </div>
      </div>
    </>
  );
};

export default Calculadora;
