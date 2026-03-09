import React,{useState,useEffect} from "react";

function Timer({time,submitTest}){

const [seconds,setSeconds] = useState(time);

useEffect(()=>{

if(seconds === 0){
submitTest();
return;
}

const interval = setInterval(()=>{
setSeconds(seconds-1)
},1000);

return ()=> clearInterval(interval);

},[seconds]);

return(
<h3>Time Left: {seconds} sec</h3>
)

}

export default Timer;