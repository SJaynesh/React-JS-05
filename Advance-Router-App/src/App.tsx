import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router";


export default function App() {
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <Header />

        <main className="flex-grow flex justify-center items-center">
          <Outlet />
        </main>

        <Footer />
      </div>

    </>
  )
}
