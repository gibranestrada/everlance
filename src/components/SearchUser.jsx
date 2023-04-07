import { useState } from "react";
import SearchIcon from "../assets/search-icon.svg";
import GithubIcon from "../assets/github-icon.svg";
import { useQuery } from "@tanstack/react-query";

const SearchUser = () => {
  const [user, setUser] = useState("");
  const [perPage, setPerPage] = useState(12);
  const [enableFetch, setEnableFetch] = useState(false);
  const [profile, setProfile] = useState([]);

  const handleSearchChange = (e) => {
    setUser(e.target.value);
    setEnableFetch(false);
    setPerPage(12);
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
    keepPreviousData: true,
  });

  const handleViewProfileClick = (profileInfo) => {
    setProfile(profileInfo);
  };

  const handleLoadMoreClick = () => {
    setPerPage((s) => s + 12);
  };

  if (isError) return <span>Error: {error.message}</span>;

  if (profile.length) return <></>;
  console.log(data);
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
        <>
          <section className="w-128 grid grid-cols-3 gap-7">
            {data?.items?.map((user) => (
              <div
                key={user.id}
                className="border-2 rounded-xl p-4 pl-6 h-32 gap-4 grid grid-cols-1"
              >
                <div className="flex gap-4 items-center">
                  <img
                    className="rounded-full"
                    src={`${user.avatar_url}`}
                    width="55"
                    alt="user-avatar"
                  />
                  <span>{user.login}</span>
                </div>
                <div className="flex justify-between">
                  <a href={user?.html_url} target="_blank" rel="noreferrer">
                    <img src={GithubIcon} alt="Github icon" />
                  </a>
                  <button
                    className="text-emerald-600"
                    onClick={() => handleViewProfileClick(user)}
                  >
                    View profile
                  </button>
                </div>
              </div>
            ))}
          </section>
          {data?.items?.length !== data?.total_count && (
            <section className="w-128 flex justify-end">
              <button
                className="border-2 rounded-md p-2 pr-4 pl-4 font-semibold"
                onClick={handleLoadMoreClick}
              >
                Load more
              </button>
            </section>
          )}
        </>
      )}
    </>
  );
};
export default SearchUser;
