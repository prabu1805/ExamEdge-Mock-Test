import React,{useState} from "react";

function Login({setUser}){

const [name,setName] = useState("");

const handleLogin = () =>{
if(name.trim() !== ""){
setUser(name)
}
}

return(

<div>

<h2>Login to ExamEdge</h2>

<input
type="text"
placeholder="Enter your name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<button onClick={handleLogin}>Start Test</button>

</div>

)

}

export default Login;