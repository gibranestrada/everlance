const LoadMoreButton = ({ data, setPerPage }) => {
  const handleLoadMoreClick = () => {
    setPerPage((s) => s + 12);
  };
  if (data?.items?.length === data?.total_count) return <></>;
  return (
    <section className="max-w-cardMax flex justify-end">
      <button
        className="border-2 rounded-md p-2 pr-4 pl-4 font-semibold"
        onClick={handleLoadMoreClick}
      >
        Load more
      </button>
    </section>
  );
};
export default LoadMoreButton;
