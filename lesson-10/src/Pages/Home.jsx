import { Feed } from "../Components/index";
import { useStoreState } from "easy-peasy";

const Home = ({ fetchError, isLoading }) => {
  const searchResults = useStoreState((state) => state.searchResults);

  return (
    // <main className="Home">
    //   {posts.length ? (
    //     <Feed posts={posts} />
    //   ) : (
    //     <p style={{ marginTop: "2rem" }}>Nothing To Display</p>
    //   )}
    // </main>
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p className="statusMsg"> No post to display</p>
        ))}
    </main>
  );
};

export default Home;
