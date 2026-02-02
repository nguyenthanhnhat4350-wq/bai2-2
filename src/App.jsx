import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SubjectList from "./Component/SubjectList";
import SubjectList from "./Component/SubjectList.css";

function App() {
  const subjects = ["ReactJS", "NodeJS", "Java", "Database"];

  return (
    <div className="app-container">
      <h1>Ứng dụng ReactJS</h1>
      <SubjectList subjects={subjects} />
    </div>
  );
}

export default App;