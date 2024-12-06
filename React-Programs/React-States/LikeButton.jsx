import { useState } from "react";

export default function LikeButton()
{
    let [isLiked, setisLiked]=useState(false)
    let [Likes,setisCount]=useState(0)
    function istoggled()
    {
        setisLiked(!isLiked)
        setisCount(Likes+1)
    }
    let likeStyle={color:"red"}
    return (
        <div>
            {Likes}
           
            <p onClick={istoggled}> 
            
                {
                    isLiked ?<i className="fa-solid fa-heart" style={likeStyle}></i> :<i className="fa-regular fa-heart"></i>
                }  
            </p>
        </div>
    )
}