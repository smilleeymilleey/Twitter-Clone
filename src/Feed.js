import React from 'react';
import TweetBox from './TweetBox';
import './Feed.css';
import Post from './Post';


function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
        </div>
      {/* TweetBox */}
      <TweetBox />
      <Post displayName="Caitlyn"
      username="smilleeymilleey"
      verified={true}
      text="its working"
      avatar="/static/images/avatar/3.jpg"
      image='https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif'/>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
