import { useState, useEffect } from "react";
import Posts from "./Posts";
import "../styles/Home.css";

import loading_gif from "../img/Loading_Gif.gif";

const Home = (props) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  //Fetch Data from JSON SRV
  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">
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
