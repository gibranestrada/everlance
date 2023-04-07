import { useQuery } from "@tanstack/react-query";

const useFetchUsersDetail = (userName) => {
  return useQuery({
    queryKey: ["repoData", userName],
    queryFn: () =>
      fetch(`https://api.github.com/users/${userName}`).then((res) =>
        res.json()
      ),
    enabled: !!userName,
  });
};
export default useFetchUsersDetail;
