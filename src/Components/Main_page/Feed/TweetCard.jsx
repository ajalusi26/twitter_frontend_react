import { useState } from "react"
import './TweetCard.css'
// import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import PublishIcon from "@material-ui/icons/Publish";

function TweetCard({displayName, username, comment_count, like_count, retweet_count, is_retweet, tweet, profile_pic}){
  const [isFavorite, setIsFavorite] = useState(false);
  function favorite(){
    //make route to add like to comment from user based on session
    setIsFavorite(!isFavorite);
  }
    return (
        <div className="post">
          <div className="post__avatar">
            <Avatar src={profile_pic} />
          </div>
          <div className="post__body">
            <div className="post__header">
              <div className="post__headerText">
                <h3>
                  {displayName}{" "}
                  <span className="post__headerSpecial">
                     @{username}
                  </span>
                </h3>
              </div>
              <div className="post__headerDescription">
                <p>{tweet}</p>
              </div>
            </div>
            {/* <img src={image} alt="" /> */}
            <div className="post__footer">
            <span className="icon">
              <ChatBubbleOutlineIcon fontSize="small" />
              {comment_count}
            </span>
            <span className="icon">
              <RepeatIcon fontSize="small" />
              {retweet_count}
            </span>
            <span className="icon" onClick={favorite}>
              {isFavorite ? <FavoriteOutlinedIcon fontSize="small" style={{color: '#f91880'}}/> :  <FavoriteBorderIcon fontSize="small" />}
              {like_count}
            </span>
            <span className="icon">
              <PublishIcon fontSize="small" />
            </span>
            </div>
          </div>
        </div>
      );
    }
        
    


export default TweetCard