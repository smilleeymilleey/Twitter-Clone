import React from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUserIcon";


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
                Caitlyn Miley <span>
                <VerifiedUserIcon className="post_badge" />
                </span>
              </h3>
            constructor() {

            }

            </div>
          </div>
        </div>
      </div>
  );
}

export default Post;
