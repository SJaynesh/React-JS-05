import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { ThemeProvider } from "./Context/ThemeContext";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <Home />
      </ThemeProvider>
    </>
  )
}
