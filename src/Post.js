import React from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';



function Post({displayName, username, verified, text, image, avatar}) {

  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src="/static/images/avatar/3.jpg"/>
        </div>
        <div className="post_body">
          <div className="post_header">
            <div className="post_headerText">
              <h3>
                Caitlyn Miley {" "}
                <span className="post_headerSpecial">
                <VerifiedUserIcon className="post_badge" />
                  @smilleymilleey </span> 
                </h3>
              </div>
              <div className="post_headerdescription">
                <p> I challenge you to build a twitter clone</p>
              </div>
            </div>
            <img className="gif" src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" alt="" />
            <div className= "post_footer">
            <ChatBubbleOutlineIcon fontSize="small" />
              <RepeatIcon fontSize="small" />
              <FavoriteBorderIcon fontSize="small" />
              <PublishIcon fontsize="small" />


          </div>
        </div>
      </div>
    );
  }


export default Post;
