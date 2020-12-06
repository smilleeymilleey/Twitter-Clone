import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar } from "@material-ui/core";
import db from'./firebase';

function TweetBox() {
const [tweetMessage, setTweetMessage] = useState("");
const [tweetImage, setTweetImage] = useState("");

const sendTweet = e => {
  e.preventDefault();

  db.collection('posts').add({
    displayName: "Caitlyn Miley",
    username: "smileymiley",
    verified: true,
    text: tweetMessage,
    image: tweetImage,
    avatar: "/static/images/avatar/3.jpg"
  });

  setTweetMessage("");
  setTweetImage("");
};


  return (
    <div className="tweetBox">
      <form>
       <div className="tweetBox_input">
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <input
           onChange={e => setTweetMessage(e.target.value)}
           value={tweetMessage}
           placeholder="Whats happening?"
           type="text"/>
       </div>
         <input
          onchange={e => setTweetImage (e.target.value)}
          value={tweetImage}
          className="tweetbox_imageInput"
          placeholder="Optional: Enter Image URL"
          type="text"/>

      <button onClick={sendTweet} className="tweetBox_tweetButton">Tweet</button>
     </form>
    </div>
  );
}

export default TweetBox;
