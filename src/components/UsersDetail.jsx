import useFetchUsersDetail from "../hooks/useFetchUsersDetail";
import GithubIcon from "../assets/github-icon.svg";
import LocationIcon from "../assets/location-icon.png";
import EmailIcon from "../assets/envelope-icon.png";
import WebsiteIcon from "../assets/link-icon.png";
import TwitterIcon from "../assets/twitter-icon.png";

const UsersDetail = ({ profileName, setProfileName }) => {
  const { data } = useFetchUsersDetail(profileName);

  if (data === undefined) return null;

  const firstName = data?.name.split(" ")[0];
  const isMissingS =
    firstName[firstName.split("").length - 1] !== "s" ? "s" : "";

  return (
    <div
      onClick={() => setProfileName("")}
      className="w-screen flex justify-center mt-12 mb-10"
    >
      <div className="flex gap-9 border-2 rounded-lg p-11 w-full max-w-cardMax">
        <div>
          <img
            className="rounded-full"
            src={`${data?.avatar_url}`}
            width="95"
            height="95"
            alt="user-avatar"
          />
        </div>
        <div className="mt-5 w-72">
          <p className="text-2xl font-medium pb-2">{data?.name}</p>
          <p className="pb-3">{data?.login}</p>
          <p className="pb-14 text-sm">{data?.bio}</p>
          <p className="flex gap-2 pb-4">
            {data?.location && <img src={LocationIcon} alt="location icon" />}
            {data?.location}
          </p>
          <p className="flex gap-2 pb-3">
            {data?.email && <img src={EmailIcon} alt="email icon" />}
            {data?.email}
          </p>
        </div>
        <div className="mt-5 ml-12">
          <div className="flex gap-2 pb-5">
            <img src={GithubIcon} alt="Github icon" />
            <span>{`${firstName}${isMissingS}github`.toLowerCase()}</span>
          </div>
          <div className="grid grid-cols-3 p-3 border-2 w-96 mb-8 h-24 rounded-2xl bg-red-50 border-red-50">
            <div className="grid justify-center">
              <span>Repos</span>
              <span className="font-semibold text-2xl place-self-center">
                {data?.public_repos}
              </span>
            </div>
            <div className="grid justify-center">
              <span>Followers</span>
              <span className="font-semibold text-2xl place-self-center">
                {data?.followers}
              </span>
            </div>
            <div className="grid justify-center">
              <span>Following</span>
              <span className="font-semibold text-2xl place-self-center">
                {data?.following}
              </span>
            </div>
          </div>
          <div className="mb-4 flex gap-1">
            {data?.twitter_username && (
              <img width="35" src={TwitterIcon} alt="twitter icon" />
            )}
            {data?.twitter_username}
          </div>
          <div className="flex gap-2">
            {data?.blog && <img src={WebsiteIcon} alt="website icon" />}
            {data?.blog?.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UsersDetail;
