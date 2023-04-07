import useFetchUsersDetail from "../hooks/useFetchUsersDetail";
import GithubIcon from "../assets/github-icon.svg";

const UsersDetail = ({ profileName, setProfileName }) => {
  const { data } = useFetchUsersDetail(profileName);

  if (data === undefined) return null;

  const firstName = data?.name.split(" ")[0];
  const isMissingS =
    firstName[firstName.split("").length - 1] !== "s" ? "s" : "";

  return (
    <div onClick={() => setProfileName("")} className="grid p-4 pt-10 pb-10">
      <div className="flex gap-9 max-w-maxCard border-2 rounded-lg p-11">
        <div>
          <img
            className="rounded-full"
            src={`${data?.avatar_url}`}
            width="95"
            height="95"
            alt="user-avatar"
          />
        </div>
        <div className="mt-5 w-80">
          <p className="text-2xl font-medium pb-2">{data?.name}</p>
          <p className="pb-3">{data?.login}</p>
          <p className="pb-14">{data?.bio} dksafja sdkfkds skfkd dkfdk </p>
          <p className="pb-3">{data?.location}</p>
          <p>{data?.email}</p>
        </div>
        <div className="mt-5 ml-12">
          <div className="flex gap-2">
            <img src={GithubIcon} alt="Github icon" />
            <span>{`${firstName}${isMissingS}github`.toLowerCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UsersDetail;
