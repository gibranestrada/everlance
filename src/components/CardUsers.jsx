import GithubIcon from "../assets/github-icon.svg";

const CardUsers = ({ data, setProfileName, isLoading, isFetching }) => {
  const handleViewProfileClick = (profileInfo) => {
    setProfileName(profileInfo);
  };

  if (isLoading && isFetching) return <span>"Loading..."</span>;

  return (
    <section className="max-w-cardMax grid grid-cols-3 gap-7">
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
              onClick={() => handleViewProfileClick(user?.login)}
            >
              View profile
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};
export default CardUsers;
