import React,{useEffect} from "react";
import axios from "axios";

function Result({score,total,user}){

useEffect(()=>{

axios.post("http://localhost:5000/submit",{
name:user,
score:score
})

},[])

return(

<div className="result">

<h2>Test Completed</h2>
<h3>Your Score: {score}/{total}</h3>

<button onClick={()=>window.location.reload()}>
Restart Test
</button>

</div>

)

}

export default Result