import { Header, Footer } from "./components";

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
