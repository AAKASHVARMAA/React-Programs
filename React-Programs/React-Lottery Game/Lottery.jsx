import { useState } from "react"
import { genTicket,sum } from "./helper"
import "./ticket.css"
import Ticket from "./Ticket"


export default  function Lottery({n=3,winningcondition})
{
    let[ticket,setTicket]=useState(genTicket(n))

    let isWinning=winningcondition(ticket)

    let buyTicket=()=>
    {
        setTicket(genTicket(3))
    }

    return(
        <div>
            <h1>Lottery Game</h1>
            < Ticket ticket={ticket}  /> 
            <br></br> 
            <button onClick={buyTicket} >Buy New Ticket</button>
            <div>
            <h2>{isWinning&&"Congratulations , You won the lottery"}</h2>
            </div>
            
        </div>
    )
}