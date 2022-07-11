import { useState, useEffect } from "react";
import Posts from "./Posts";
import "../styles/Home.css";

import loading_gif from "../img/Loading_Gif.gif";

const Home = (props) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const errMsg = "";

  //Fetch Data from JSON SRV
  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((res) => {
        if (!res.ok) {
          throw Error("OOPS! something went wrong!");
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  return (
    <div className="home">
      {error && <div className="error"> {error} </div>}
      {loading && (
        <div className="gif_container">
          <img className="loading_gif" src={loading_gif} alt="loading..." />
        </div>
      )}
      {posts && <Posts posts={posts} />}
    </div>
  );
};

export default Home;
