import { useState } from "react";
import "./App.css";
import SearchUser from "./components/SearchUser";
import useFetchGitHubUsers from "./hooks/useFetchGitHubUsers";
import CardUsers from "./components/CardUsers";
import LoadMoreButton from "./components/LoadMoreButton";

const App = () => {
  const [user, setUser] = useState("");
  const [perPage, setPerPage] = useState(12);
  const [enableFetch, setEnableFetch] = useState(false);
  const [profile, setProfile] = useState([]);

  const { isLoading, isError, data, error, isFetching } = useFetchGitHubUsers({
    user,
    perPage,
    enableFetch,
  });

  if (isError) return <span>Error: {error.message}</span>;

  return (
    <div className="App">
      <header className="App-nav drop-shadow-md border-b-4">
        <nav className="p-6 pl-7 font-semibold">Everlance Inc.</nav>
      </header>
      {!profile.length ? (
        <div className="grid justify-center p-3 pt-12 gap-8 pb-8">
          <SearchUser
            setEnableFetch={setEnableFetch}
            setPerPage={setPerPage}
            setUser={setUser}
          />
          <CardUsers
            isLoading={isLoading}
            data={data}
            setProfile={setProfile}
            isFetching={isFetching}
          />
          <LoadMoreButton data={data} setPerPage={setPerPage} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
