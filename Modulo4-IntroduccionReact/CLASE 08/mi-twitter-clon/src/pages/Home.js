import { useState, useEffect } from "react";

import TweetList from "../Components/TweetList";

import TweetForm from "../Components/TweetForm";

const Home = () => {

  const [tweets, setTweets] = useState(() => {

    return JSON.parse(localStorage.getItem("tweets")) || [];

  });

  useEffect(() => {

    localStorage.setItem("tweets", JSON.stringify(tweets));

  }, [tweets]);

  const addTweet = (text) => {

    const newTweet = {

      id: Date.now(),

      text,

      likes: 0,

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

    <div>

      <TweetForm onAddTweet={addTweet} />

      <TweetList tweets={tweets} onLike={likeTweet} />

    </div>

  );

};

export default Home;