import { useState } from "react";
import SearchIcon from "../assets/search-icon.svg";
import { useQuery } from "@tanstack/react-query";

const SearchUser = () => {
  const [user, setUser] = useState("");
  const [perPage, setPerPage] = useState(12);
  const [enableFetch, setEnableFetch] = useState(false);

  const handleSearchChange = (e) => {
    setUser(e.target.value);
    setPerPage(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEnableFetch(true);
  };

  const { isLoading, isError, data, error, isFetching } = useQuery({
    queryKey: ["repoData", user, perPage, enableFetch],
    queryFn: () =>
      fetch(
        `https://api.github.com/search/users?q=${user}&page=1&per_page=${perPage}`
      ).then((res) => res.json()),
    enabled: !!user && !!enableFetch,
  });

  if (isError) return <span>Error: {error.message}</span>;

  return (
    <>
      <section className="w-128 flex justify-between">
        <p className="font-semibold text-xl">GitHub Users</p>
        <div className="flex flex-row">
          <img
            className="search-icon"
            src={SearchIcon}
            width="18"
            alt="Search icon"
          />
          <form onSubmit={handleFormSubmit}>
            <input
              className="border-2 rounded p-1 pl-7 w-72"
              type="search"
              placeholder="Enter username or email"
              onChange={handleSearchChange}
            />
          </form>
        </div>
      </section>
      {isLoading && isFetching ? (
        <span>"Loading..."</span>
      ) : (
        <section className="w-128">world</section>
      )}
      <section className="w-128">!</section>
    </>
  );
};
export default SearchUser;
