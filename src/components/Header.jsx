export const Header = () => {
  return (
    <header className="bg-slate-700 p-10 py-4 flex justify-between items-center text-white">
      <div>
        <h1 className="text-xl font-bold">HANGMAN!</h1>
      </div>
      <nav>
        <ul className="flex gap-10">
          <li>
            <button
              className="uppercase p-4 py-1 bg-white text-slate-700 rounded-md font-bold block
            hover:bg-slate-300 hover:scale-110 transition-all"
            >
              ANIMALS
            </button>
          </li>
          <li>
            <button
              className="uppercase p-4 py-1 bg-white text-slate-700 rounded-md font-bold block
            hover:bg-slate-300 hover:scale-110 transition-all"
            >
              COUNTRIES
            </button>
          </li>
          <li>
            <button
              className="uppercase p-4 py-1 bg-white text-slate-700 rounded-md font-bold block
            hover:bg-slate-300 hover:scale-110 transition-all"
            >
              FRUITS
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
