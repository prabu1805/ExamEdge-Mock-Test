import React,{useEffect,useState} from "react";
import axios from "axios";
import { FaTrophy } from "react-icons/fa";



function Leaderboard(){

const [data,setData] = useState([]);

useEffect(()=>{

axios.get("http://localhost:5000/leaderboard")
.then(res=>{
setData(res.data)
})

},[])

return(

<div className="leaderboard">

<h2><FaTrophy/> Leaderboard</h2>

<table>

<thead>
<tr>
<th>Rank</th>
<th>Name</th>
<th>Score</th>
</tr>
</thead>

<tbody>

{data.map((player,index)=>(
<tr key={index}>
<td>{index+1}</td>
<td>{player.name}</td>
<td>{player.score}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}

export default Leaderboard