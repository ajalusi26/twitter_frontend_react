import { useState } from "react"
import './TweetCard.css'
// import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import PublishIcon from "@material-ui/icons/Publish";
import {useNavigate} from 'react-router-dom'


function TweetCard({displayName, username, comment_count, like_count, retweet_count, is_retweet, tweet, profile_pic, tweet_id}){
  const [isFavorite, setIsFavorite] = useState(false);

  let navigate = useNavigate()
  function favorite(){
    //make route to add like to comment from user based on session
    setIsFavorite(!isFavorite);
  }
  function showMore(e){ 
    if(e.target.id != 'icon'){
    localStorage.setItem('selected_tweet', tweet_id )
    navigate('/moreInfo')
    } else{
      return
    }
  }
    return (
        <div className="post" onClick={showMore} id={tweet_id}>
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
              <div className="post__headerDescription" id={tweet_id}>
                <p>{tweet}</p>
              </div>
            </div>
            {/* <img src={image} alt="" /> */}
            <div className="post__footer">
            <span className="icon-comment icon" id="icon">
              <ChatBubbleOutlineIcon fontSize="small" id="icon"/>
              {comment_count}
            </span>
            <span className="icon-retweet icon" id="icon">
              <RepeatIcon fontSize="small" id="icon"/>
              {retweet_count}
            </span>
            <span  onClick={favorite} className={isFavorite ? " icon-like icon liked": 'icon-like icon'} id="icon">
              {isFavorite ? <FavoriteOutlinedIcon fontSize="small" id="icon"/> :  <FavoriteBorderIcon fontSize="small" id="icon"/>}
              {like_count}
            </span>
            <span className="icon-download icon" id="icon">
              <PublishIcon fontSize="small" id="icon"/>
            </span>
            </div>
          </div>
        </div>
      );
    }
        
    


export default TweetCard