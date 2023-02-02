import { useState } from "react"

const Calculadora = ()=> {

    const [valor, setvalor] = useState(0)
    const [valor1, setvalor1] = useState(0)
    const [operador, setoperador] = useState(0)

    const numero = (e) => {
        if(valor === 0 ){
        setvalor(e.target.value)
        }
        else{
            setvalor(valor + e.target.value)
        }
    }

    const opera = (e)=> {
        if (operador == 0) {
            setvalor1(parseFloat(valor))
            setoperador(e.target.value)
            setvalor(0) 
        }
        else{
            setoperador(e.target.value)
        }
       
    }

    const borrar= ()=>{
        setvalor(0)
        setoperador(0)
    }

    const punto = ()=>{
        
            
                setvalor(valor + '.')
            
    }

    const res = () => {

        if(operador == "+"){
            setvalor(parseFloat(valor) + valor1)
            setoperador(0)
        }
        if(operador == "-"){
            setvalor(valor1 - parseFloat(valor))
            setoperador(0)
        }
        if(operador == "/"){
            setvalor(valor1 / parseFloat(valor) )
            setoperador(0)
        }
        if(operador == "*"){
            setvalor(valor1 * parseFloat(valor))
            setoperador(0)
        }
        
    }
    


    return (
        <>
        
        <div class="calculator">
    
            <div class="console">
                <div class="previousNumber">
                    <p>{valor}</p>
                    <span class="mathSign"></span>
                </div>
                <div class="currentNumber"></div>
            </div>
            <div class="keys">
                <button class="clear" onClick={borrar}>C</button>
                <button class="operator">x^</button>
                <button class="operator" onClick={opera} value={"/"}>/</button>
                <button class="operator" onClick={opera} value={"*"}>*</button>
                <button class="number"onClick={numero}value={7}>7</button>
                <button class="number"onClick={numero} value={8}>8</button>
                <button class="number"onClick={numero}value={9}>9</button>
                <button class="operator" onClick={opera} value={"-"}>-</button>
                <button class="number"onClick={numero}value={4}>4</button>
                <button class="number"onClick={numero}value={5}>5</button>
                <button class="number"onClick={numero} value={6}>6</button>
                <button class="operator" onClick={opera} value={"+"}>+</button>
                <button class="number" onClick={numero} value={1} >1</button>
                <button class="number" onClick={numero} value={2}>2</button>
                <button class="number" onClick={numero} value={3}>3</button>
                <button class="equals" onClick={res}>=</button>
                <button class="number"onClick={numero} value={0} id="zero">0</button>
                <button class="number" onClick={punto} >.</button>
            </div>
        </div>
        </>
    )
}

export default Calculadora