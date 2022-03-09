import {useState, useEffect} from 'react'


import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import PublishIcon from "@material-ui/icons/Publish";
import {useNavigate} from 'react-router-dom'
import './Tweet.css'
function Tweet({comments, comment_count, like_count, retweet_count, is_retweet, tweet, tweet_id, user, profile}){
    
    const [isFavorite, setIsFavorite] = useState(false);
    const [likes, setLikes] = useState(like_count);

      function favorite(e){
      let postData = {
        tweet_id: tweet_id,
        user_id: localStorage.current_user
      }
      fetch('http://127.0.0.1:3000/like_tweet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
        })
        .then(response => response.json())
        .then(data => {
          if(data.liked){
            setIsFavorite(true)
            setLikes(data.liked)
          }else { 
            setIsFavorite(false)
            setLikes(data.unliked)      
          }
        
    })}
   
        return(
            <div className="tweet">
                <div className="post__avatar">
                <Avatar src={profile.profile_pic} />
              </div>
              <div className="post__body">
                <div className="post__header">
                  <div className="post__headerText">
                    <h3>
                      {profile.display_name}{" "}
                      <br></br>
                      <span className="post__headerSpecial">
                         @{user.username}
                      </span>
                    </h3>
                  </div>
                  <br></br>
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
                  {likes}
                </span>
                <span className="icon-download icon" id="icon">
                  <PublishIcon fontSize="small" id="icon"/>
                </span>
                </div>
              </div>
            </div>
            
        )
   
    
    
}

export default Tweet