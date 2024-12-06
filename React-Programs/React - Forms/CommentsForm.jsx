import { useState } from "react"

export default function CommentsForm({addNewcomment})
{
    let[formData,setFormsdata]=useState(
        {
            username:"",
            remarks:"",
            rating:"5"
        }
    )
   let handlerInput=(event)=>
    {
      
        setFormsdata((currdata)=>
        {
            return (
                {...currdata, [event.target.name]:event.target.value}
            )
        })
      

    }
    let handleSubmit=(event)=>
    {
        
        addNewcomment(formData)
        event.preventDefault()
    }

   return(
        <div>
            <h3>Give Remarks</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input placeholder="enter username" type="text" value={formData.username} id="username" name="username" onChange={handlerInput}/>
                <br></br><br></br>
               <label htmlFor="remarks">Remarks</label>
               <textarea placeholder="write your remarks" id="remarks" value={formData.remarks} name="remarks"  type="text" onChange={handlerInput}></textarea>
                <br></br><br></br>
                <label htmlFor="rating">rating</label>
                <input  type="number" id="rating" min={1} max={5} value={formData.rating} name="rating" onChange={handlerInput}/>
                <br></br><br></br>
                <button>Add Comment</button>
            </form>
        </div>
    )
}