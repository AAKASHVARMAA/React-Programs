import { useState } from "react"

 export default function Counter()
{
   let[count,setState]=useState(0)

    function incCount()
    {
       setState((preVal)=>{
             return preVal+1
       })
       setState((preVal)=>{
            return  preVal+1
        })
       
       
    }  
    
    return(
        <div>
            <h3>count={count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )

}
