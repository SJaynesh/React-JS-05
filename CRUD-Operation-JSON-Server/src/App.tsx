import { Outlet } from "react-router";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

export default function App() {
  return (
    <div className="h-screen w-full flex flex-col">
      <NavBar />
      <main className="flex-grow flex justify-center items-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
