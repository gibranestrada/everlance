import "./App.css";
import SearchIcon from "./assets/search-icon.svg";

function App() {
  return (
    <div className="App">
      <header className="App-nav drop-shadow-md border-b-4">
        <nav className="p-6 pl-7 font-semibold">Everlance Inc.</nav>
      </header>
      <div className="grid justify-center p-3 pt-12">
        <section className="w-128 flex justify-between">
          <p className="font-semibold text-xl">GitHub Users</p>
          <div className="flex flex-row">
            <img
              className="search-icon"
              src={SearchIcon}
              width="18"
              alt="Search icon"
            />
            <input
              className="border-2 rounded p-1 pl-7 w-72"
              type="search"
              placeholder="Enter username or email"
            ></input>
          </div>
        </section>
        <section className="w-128">world</section>
        <section className="w-128">!</section>
      </div>
    </div>
  );
}

export default App;
