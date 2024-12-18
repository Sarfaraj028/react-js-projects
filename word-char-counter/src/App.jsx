
import { useRef } from 'react'
import './App.css'
import NavBar from './NavBar'
import WordCharCounter from './WordCharCounter'

function App() {
  let access = document.querySelector(".App");

  const toggleMode = () => {
    if (access.className.contains("App")) {
      access.className.add("dark");
      console.log("true");
    } else {
      access.className.remove("dark");
      console.log("light");
    }
  }
  return (
    <div className="App">
      <NavBar />
      <WordCharCounter />
    </div>
  )
}

export default App
