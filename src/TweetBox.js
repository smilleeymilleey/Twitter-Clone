import React from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
       <div className="tweetBox_input">
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <input placeholder="Whats happening?" type="text"/>
          {/*<input placeholder="Enter Image URL" type="text"/> */}
       </div>
      <button className="tweetBox_tweetButton">Tweet</button>
     </form>
    </div>
  );
}

export default TweetBox;
