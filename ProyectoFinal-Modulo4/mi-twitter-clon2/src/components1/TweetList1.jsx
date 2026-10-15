import Tweet from "./Tweet1";

const TweetList1 = ({ tweets, onLike }) => {

  return (

    <div>

      {tweets.map((tweet) => (

        <Tweet key={tweet.id} tweet={tweet} onLike={onLike} />

      ))}

    </div>

  );

};

export default TweetList1;