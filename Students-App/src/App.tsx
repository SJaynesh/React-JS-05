import { useState } from "react";
import NavBar from "./Components/NavBar";
import StudentForm from "./Components/StudentForm";

export default function App() {
  const [isOffline, setIsOffline] = useState(false)

  if (isOffline) {
    return (
      <>
        <NavBar />
        <h1>You are Offline</h1>
      </>
    )
  }

  return (
    <>
      <NavBar />
      <StudentForm />

    </>
  )
}
