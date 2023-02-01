import { useState } from "react"

const Calculadora = ()=> {

    const [valor, setvalor] = useState(0)
    
    let n1; 
    let op;
    let n2 ;
    let resul ;

    const numero1 = () => {
        if(valor == 0 ){
        setvalor(valor + 1)
        }
        else{
            setvalor(valor + "1")
        }
    }
    const numero2 = () => {
        if(valor == 0 ){
        setvalor(valor + 2)
        }
        else{
            setvalor(valor + "2")
        }
    }
    const numero3 = () => {
        if(valor == 0 ){
        setvalor(valor + 3)
        }
        else{
            setvalor(valor + "3")
        }
    }
    const numero4 = () => {
        if(valor == 0 ){
        setvalor(valor + 4)
        }
        else{
            setvalor(valor + "4")
        }
    }
    const numero5 = () => {
        if(valor == 0 ){
        setvalor(valor + 5)
        }
        else{
            setvalor(valor + "5")
        }
    }
    const numero6 = () => {
        if(valor == 0 ){
        setvalor(valor + 6)
        }
        else{
            setvalor(valor + "6")
        }
    }
    const numero7 = () => {
        if(valor == 0 ){
        setvalor(valor + 7)
        }
        else{
            setvalor(valor + "7")
        }
    }
    const numero8 = () => {
        if(valor == 0 ){
        setvalor(valor + 8)
        }
        else{
            setvalor(valor + "8")
        }
    }
    const numero9 = () => {
        if(valor == 0 ){
        setvalor(valor + 9)
        }
        else{
            setvalor(valor + "9")
        }
    }
    const numero0 = () => {
        if(valor == 0 ){
        setvalor(valor + 0)
        }
        else{
            setvalor(valor + "0")
        }
    }

    const suma = ()=> {
        n1 = parseInt(valor)
        op = "+"
        valor = 0
    }

    const res = () => {
        n2 = parseInt(valor) 
        if(op == "+"){
            
            resul = n1 + n2
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
                <button class="clear">C</button>
                <button class="operator">x^</button>
                <button class="operator">/</button>
                <button class="operator">*</button>
                <button class="number"onClick={numero7}>7</button>
                <button class="number"onClick={numero8}>8</button>
                <button class="number"onClick={numero9}>9</button>
                <button class="operator">-</button>
                <button class="number"onClick={numero4}>4</button>
                <button class="number"onClick={numero5}>5</button>
                <button class="number"onClick={numero6}>6</button>
                <button class="operator" onClick={suma}>+</button>
                <button class="number" onClick={numero1} >1</button>
                <button class="number" onClick={numero2}>2</button>
                <button class="number" onClick={numero3}>3</button>
                <button class="equals">=</button>
                <button class="number"onClick={numero0} id="zero">0</button>
                <button class="number">.</button>
            </div>
        </div>
        </>
    )
}

export default Calculadora