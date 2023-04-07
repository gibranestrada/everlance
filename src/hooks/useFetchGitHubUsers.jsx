import { useQuery } from "@tanstack/react-query";

const useFetchGitHubUsers = ({ user, perPage, enableFetch }) => {
  const { isLoading, isError, data, error, isFetching } = useQuery({
    queryKey: ["repoData", user, perPage, enableFetch],
    queryFn: () =>
      fetch(
        `https://api.github.com/search/users?q=${user}&page=1&per_page=${perPage}`
      ).then((res) => res.json()),
    enabled: !!user && !!enableFetch,
    keepPreviousData: true,
  });

  return { isLoading, isError, data, error, isFetching };
};
export default useFetchGitHubUsers;
