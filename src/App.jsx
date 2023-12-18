import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1"></main>
      <Footer />
    </div>
  );
}

export default App;
