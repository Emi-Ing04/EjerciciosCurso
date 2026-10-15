import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import TweetList1 from "../components1/TweetList1";
import TweetForm1 from "../components1/TweetForm1";

const Home1 = ({ user, logout }) => {
  // Lógica de los tweets (del taller anterior)
  const [tweets, setTweets] = useState(() => {
    return JSON.parse(localStorage.getItem("tweets1")) || [];
  });

  useEffect(() => {
    localStorage.setItem("tweets1", JSON.stringify(tweets));
  }, [tweets]);


  if (!user) {
    return <Navigate to="/login1" />;
  }

  const addTweet = (text) => {
    const newTweet = {
      id: Date.now(),
      text,
      likes: 0,
      autor: user.username 
    };
    setTweets([newTweet, ...tweets]);
  };

  const likeTweet = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2 style={{ margin: 0 }}>Inicio</h2>
        <div>
          <span style={{ marginRight: "15px" }}>Hola, <strong>@{user.username}</strong></span>
          <button onClick={logout} style={{ backgroundColor: "#e0245e", color: "white", border: "none", padding: "5px 10px", borderRadius: "4px", cursor: "pointer" }}>
            Cerrar sesión
          </button>
        </div>
      </div>

      <TweetForm1 onAddTweet={addTweet} />
      <hr style={{ margin: "20px 0", border: "0.5px solid #eff3f4" }} />
      <TweetList1 tweets={tweets} onLike={likeTweet} />
    </div>
  );
};

export default Home1;