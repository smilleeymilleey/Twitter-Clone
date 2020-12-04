import React from 'react'
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';

function Widgets () {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder="Search Twitter" type="text" />

        <div className="widgets_widgetContainer">
          <h2>Whats Happening</h2>
            <TwitterTweetEmbed tweetId={"1333832086541783043"} />
        </div>
      </div>

    </div>
    );
}

export default Widgets;
