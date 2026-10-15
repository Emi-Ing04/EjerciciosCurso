import Tweet1 from "./Tweet1";

const TweetList1 = ({ tweets, onLike }) => {

  return (

    <div>

      {tweets.map((tweet) => (

        <Tweet1 key={tweet.id} tweet={tweet} onLike={onLike} />

      ))}

    </div>

  );

};

export default TweetList1;