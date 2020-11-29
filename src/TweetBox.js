import React from 'react';
import "./TweetBox.css";
import { Avatar } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
       <div className="tweetBox_input">
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <input placeholder="Whats happening?" type="text"/>
       </div>
         <input className="tweetbox_imageInput" placeholder="Optional: Enter Image URL" type="text"/>

      <button className="tweetBox_tweetButton">Tweet</button>
     </form>
    </div>
  );
}

export default TweetBox;
