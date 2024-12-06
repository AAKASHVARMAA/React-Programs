import { useState } from "react"

export default function Form()
{
    let[formdata,setFormdata]=useState(
        {
            fullName:"",
            userName:""
        }
    )

    let handleData=(event)=>
    {
       let fieldName=event.target.name
        let newValue=event.target.value
        setFormdata((currData)=>
        {
            /*currData[fieldName]=newValue
            return(
                {...currData}
            )*/
           return(
            {
                ...currData,[fieldName]:newValue
            }
           )
        })
        
    }

  



    return(
        <form>
            <label htmlFor="fullname">Full Name  </label>
            <input placeholder="enter your name" value={formdata.fullName} onChange={handleData} id="fullname" name="fullName" />
           <br></br> <br></br>
            <label htmlFor="username">User Name  </label>
            <input placeholder="enter your name" value={formdata.userName} onChange={handleData} id="username" name="userName"/>
            <br></br> <br></br>
            <button>Submit</button>
        </form>
    )
}