const Tweet1 = ({ tweet, onLike }) => {

  return (

    <div className="tweet">

      <p>{tweet.text}</p>

      <button onClick={() => onLike(tweet.id)}>

        ❤ {tweet.likes}

      </button>

    </div>

  );

};

export default Tweet1;