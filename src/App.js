import { useState } from "react";
import "./App.css";
import SearchUser from "./components/SearchUser";
import useFetchGitHubUsers from "./hooks/useFetchGitHubUsers";
import CardUsers from "./components/CardUsers";
import LoadMoreButton from "./components/LoadMoreButton";
import UsersDetail from "./components/UsersDetail";

const App = () => {
  const [user, setUser] = useState("");
  const [perPage, setPerPage] = useState(12);
  const [enableFetch, setEnableFetch] = useState(false);
  const [profileName, setProfileName] = useState("");

  const { isLoading, isError, data, error, isFetching } = useFetchGitHubUsers({
    user,
    perPage,
    enableFetch,
  });

  if (isError) return <span>Error: {error.message}</span>;

  return (
    <div className="w-screen flex flex-col">
      <header className="drop-shadow-md border-b-4">
        <nav className="p-6 pl-7 font-semibold">Everlance Inc.</nav>
      </header>
      {profileName.length === 0 ? (
        <div className="grid justify-center p-3 pt-12 gap-8 pb-8 w-screen">
          <SearchUser
            setEnableFetch={setEnableFetch}
            setPerPage={setPerPage}
            setUser={setUser}
          />
          <CardUsers
            isLoading={isLoading}
            data={data}
            setProfileName={setProfileName}
            isFetching={isFetching}
          />
          <LoadMoreButton data={data} setPerPage={setPerPage} />
        </div>
      ) : (
        <UsersDetail
          profileName={profileName}
          setProfileName={setProfileName}
        />
      )}
    </div>
  );
};

export default App;
