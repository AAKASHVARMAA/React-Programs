import { useEffect, useState } from "react"

export default function Counter()
{
    let [counter,setCounter]=useState(0)
    let incCount=()=>
    {
        setCounter((currcount)=>currcount+=1)
    }
    useEffect(function printSomething()
    {
        console.log("this is a side effect")
        
    })
    return (
        <div>
            <h2>counter={counter}</h2>
            <button onClick={incCount}>+1</button>
        </div>
    )
}