import react, { useState } from "react";

function Practice(){
    const [count,setCount]= useState(0);

    const increment =() =>{
        setCount(count +1);
    }

    const decrement =() =>{
        setCount(count -1);
    }

    return (

        <div>
        <h1>Count:{count}</h1>
        <button onClick={increment}>INcrecment</button>

        <button onClick={decrement}>deccrecment</button>
        </div>

    )
        
    }





export default Practice;