import SearchIcon from "../assets/search-icon.svg";

const SearchUser = ({ setEnableFetch, setPerPage, setUser }) => {
  const handleSearchChange = (e) => {
    setUser(e.target.value);
    setEnableFetch(false);
    setPerPage(12);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEnableFetch(true);
  };

  return (
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
  );
};
export default SearchUser;
