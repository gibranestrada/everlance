import SearchIcon from "../assets/search-icon.svg";

const UserSearch = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
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
          />
        </form>
      </div>
    </section>
  );
};
export default UserSearch;
