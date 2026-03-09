import React from "react";
import Quiz from "./components/Quiz";
import "./App.css";
import Timer from "./components/Timer";
import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [user,setUser] = useState(null);

  return (
    <div className="app">
      <h1>ExamEdge Mock Test</h1>
      {!user ? <Login setUser={setUser}/> : <Quiz user={user}/>}
    </div>
  );
}

export default App;
