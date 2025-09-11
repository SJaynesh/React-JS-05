
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MyRoutes from "./Routes/MyRoutes";
export default function App() {
  return (
    <div className="h-screen w-full flex flex-col">
      <Header />

      <main className="flex-grow flex justify-center items-center">
        <MyRoutes />
      </main>

      <Footer />
    </div>
  );
}
