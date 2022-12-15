import { useState, useEffect } from "react";
import Skeleton from "./components/skeleton";
import Blogs from "./components/blogs";
import Component2 from "./components/component2";

const App = () => {
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [state, setstate] = useState({ cata: "s" });

  const changeState = () => {
    setstate({
      cata: `state/props of parent component 
    is send by onClick event to another component`,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      fetch(" http://localhost:5000/blogs")
        .then((response) => {
          if (!response.ok) {
            throw Error(
              "Sorry, some error occurred while fetching your blogs."
            );
          }
          return response.json();
        })
        .then((data) => {
          setBlogs(data);
          setLoading(false);
          setError(false);
        })
        .catch((err) => {
          console.log(err.message);
          setError(true);
        });
    }, 4000);
  });

  return (
    <div>
      {blogs && <Blogs blogs={blogs} />}
      <div className="container">
        {loading && [1, 2, 3, 4, 5, 6, 7].map((n) => <Skeleton key={n} />)}
        <button onClick={changeState}>click me</button>
      </div>

      {error && (
        <div className="container">
          <span className="error">
            Error connecting to the server. Connection failed.
          </span>
        </div>
      )}
      <div>hii</div>
      <Component2 cata={state.cata} />
      <div className="main-cointainer">
        <h2>Compnent1</h2>
        <button onClick={changeState} type="button">
          Send state
        </button>
      </div>
    </div>
  );
};

export default App;
