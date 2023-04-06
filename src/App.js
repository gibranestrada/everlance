import "./App.css";
import UserSearch from "./components/UserSearch";

const App = () => {
  return (
    <div className="App">
      <header className="App-nav drop-shadow-md border-b-4">
        <nav className="p-6 pl-7 font-semibold">Everlance Inc.</nav>
      </header>
      <div className="grid justify-center p-3 pt-12">
        <UserSearch />
        <section className="w-128">world</section>
        <section className="w-128">!</section>
      </div>
    </div>
  );
};

export default App;
