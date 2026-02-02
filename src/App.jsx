import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SubjectList from "./SubjectList";

function App() {
  const subjects = ["ReactJS", "NodeJS", "Java", "Database"];

  return (
    <div>
      <SubjectList subjects={subjects} />
    </div>
  );
}

export default App;