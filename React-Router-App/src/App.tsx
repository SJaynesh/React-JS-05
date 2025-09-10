import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Service from "./Components/Service";

export default function App() {
  return (
    <div className="h-screen w-full flex flex-col">
      <Header />

      <main className="flex-grow flex justify-center items-center">
        <Home />
        <About />
        <Service />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
