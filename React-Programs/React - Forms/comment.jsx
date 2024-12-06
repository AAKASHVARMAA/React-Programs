import { useState } from "react"
import "./comments.css"
import CommentsForm from "./CommentsForm"
export default function Comment()
{
    let [comments,setComments]=useState([
        {
            username:"@mern",
            remarks:"mern",
            rating:5
        }
    ])
    let addNewcomment=(comment)=>
    {
        setComments((currcomments)=>[
            ...currcomments,comment
        ])
        console.log("added new comments")
    }
    return (
        <>
            <div>
                <h3>All Comments</h3>
                {comments.map((comment,idx)=>(
                    <div className="comment" key={idx}>
                    <span>{comment.remarks}</span>
                    &nbsp; &nbsp;
                    <span>( rating={comment.rating})</span>
                    <p>-{comment.username}</p>
                </div> 
                ))}
                
            </div>
            <hr></hr>
            <CommentsForm addNewcomment={addNewcomment}/>
         </>
    )
}