import { useState } from "react";
/* function usestate(initialVAalue){
//codes
return[initialValue,mutatorFunction]
} */
export default function Counter(){
    let value = 10
    const[countValue,setCountValue] = useState(111)  //array destructuring 
        function increment(){
        console.log("increment");
        value = value + 1 
        // console.log("value",value);
        console.log({value});
        
        setCountValue(countValue + 1)
    }
    const decrement = () =>{
        console.log("decrement");
        setCountValue(countValue - 1)
    }
    console.log("counter-render");
    
return (
<>
<h1>normal counter variable : {value}</h1>
<h1>state counter variable : {countValue}</h1>

<button onClick={increment}>increment</button>
<button onClick={decrement}>decrement</button>
</>
)
}
