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
  const [likes, setLikes] = useState(like_count)
  let navigate = useNavigate()
  
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
      
            setLikes(data)
            setIsFavorite(!isFavorite)
        
    })}

  function showMore(e){ 
    if(e.target.id !== 'icon'){
    localStorage.setItem('selected_tweet', tweet_id )
    localStorage.setItem('tweet_author', username )
    navigate('/moreInfo')
    } else{
      return
    }
    console.log(e.target.id)
  }
    return (
        <div className="post" onClick={showMore} >
          <div className="post__avatar">
            <Avatar src={profile_pic} />
          </div>
          <div className="post__body">
            <div className="post__header">
              <div className="post__headerName">
                <h3>
                  {displayName}{" "}
                  <span className="post__header-Special">
                     @{username}
                  </span>
                </h3>
              </div>
              <div className="post__header" id={'more'}>
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
            <span   className={isFavorite ? " icon-like icon liked": 'icon-like icon'} id="icon">
              {isFavorite ? <FavoriteOutlinedIcon fontSize="small" id="icon" onClick={favorite}/> :  <FavoriteBorderIcon fontSize="small" id="icon" onClick={favorite}/>}
              {likes}
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