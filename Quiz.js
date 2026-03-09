import React, {useEffect, useState} from "react";
import axios from "axios";
import Result from "./Result";
import Timer from "./Timer";
import { FaClock } from "react-icons/fa";



function Quiz(){

const [questions,setQuestions] = useState([]);
const [current,setCurrent] = useState(0);
const [score,setScore] = useState(0);
const [showResult,setShowResult] = useState(false);
const [seconds,setSeconds] = useState(60);

useEffect(()=>{
axios.get("http://localhost:5000/questions")
.then(res=>{
setQuestions(res.data)
})
},[])

const handleAnswer = (option) =>{

if(option === questions[current].answer){
setScore(score+1)
}

const next = current +1;

if(next < questions.length){
setCurrent(next)
}else{
setShowResult(true)
}

}

if(questions.length === 0){
return <h2>Loading...</h2>
}

return(
<div className="quiz-container">

{showResult ? (
<Result score={score} total={questions.length}/>
) : (

<>
<h2>{questions[current].question}</h2>
<h3 className="timer">
<FaClock/> Time Left: {seconds}s
</h3>
<h3>Time Left: {seconds}s</h3>

<div className="options">

{questions[current].options.map((opt,index)=>(
<button key={index} onClick={()=>handleAnswer(opt)}>
{opt}
</button>
))}
<Timer time={60} submitTest={()=>setShowResult(true)}/>

</div>

<p>Question {current+1} / {questions.length}</p>
</>

)}

</div>
)

}

export default Quiz