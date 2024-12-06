import { useState } from "react"

export default function LudoBoard()
{
    let [Moves,setMoves]=useState({blue:0,red:0,green:0,yellow:0})
    let[arr,setArr]=useState(["no moves"])
        let updateBlue=()=>
        {
            Moves.blue+=1
            setMoves({...Moves})
            setArr([...arr,"moves blue"])//array is also passed as object by using spread operator
                                        // then only state change is detected
        }
        
        let updateRed=()=>
            {
                Moves.red+=1
                setMoves({...Moves})
            }
        let updateGreen=()=>
            {
                Moves.green+=1
                setMoves({...Moves})
            }
        let updateyellow=()=>
            {
                Moves.yellow+=1
                setMoves({...Moves})
            }

    return (
        <div>
            <p>LudoBoard game</p>
            <div className="Board">
                <p>Blue ={Moves.blue}</p>
                <p>{arr}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Red ={Moves.red}</p>
                <button style={{backgroundColor:"red"}}onClick={updateRed}>+1</button>
                <p>Green ={Moves.green}</p>
                <button style={{backgroundColor:"green"}}onClick={updateGreen}>+1</button>
                <p>Yellow={Moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateyellow}>+1</button>
            </div>
        </div>
    )
}