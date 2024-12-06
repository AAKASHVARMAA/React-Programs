import LudoBoard from './LudoBoard'
import Todo from './Todo'
import Lottery from './Lottery'
import './App.css'
import Ticket from './Ticket.jsx'
import {sum} from "./helper.js"

function App() {
  let winCondition=(ticket)=>
  {
     return sum(ticket)===15
  }

  return (
    <>
     <Lottery n={3}winningcondition={winCondition}/>
    
    </>
  )
}

export default App
