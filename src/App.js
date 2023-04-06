import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchUser from "./components/SearchUser";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-nav drop-shadow-md border-b-4">
          <nav className="p-6 pl-7 font-semibold">Everlance Inc.</nav>
        </header>
        <div className="grid justify-center p-3 pt-12 gap-8">
          <SearchUser />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
