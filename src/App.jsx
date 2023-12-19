import { Header, Footer, TopicLabel } from "./components";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 flex">
        <div className="flex-[2] bg-slate-200 flex items-center flex-col gap-8 p-10">
          <TopicLabel topic="animals" />
        </div>
        <div className="flex-[1]"></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
