import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import StudentForm from "./Components/StudentForm";

export default function App() {
  const [isOffline, setIsOffline] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');


  useEffect(() => {
    console.log("Use Effect is running....");
    localStorage.setItem('theme', theme);
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme => (theme === 'light') ? 'dark' : 'light');
  }

  if (isOffline) {
    return (
      <>
        <NavBar theme={theme} toggleTheme={toggleTheme} />
        <h1>You are Offline</h1>
      </>
    )
  }

  return (
    <>
      <div className="w-full min-h-screen" style={{ backgroundColor: theme === 'light' ? "white" : "black" }}>
        <NavBar theme={theme} toggleTheme={toggleTheme} />
        <div className="pt-24">
          <StudentForm />
        </div>
      </div>
    </>
  )
}
