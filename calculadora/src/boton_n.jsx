import React from 'react';

function Boton_n (){

    const numero = (e) => {
        if(valor === 0 ){
        setvalor(e.target.value)
        }
        else{
            setvalor(valor + e.target.value)
        }
    }

    return (
        
         <button class="number"onClick={numero}value={4}>4</button>
        
    );

}

export default Boton_n