function Hello()
{
    return(
        console.log("Hello world")
    )
}



export default function Button()
{
    return(
        <div>
            <button onClick={Hello}>click me</button>
        </div>
    )
}