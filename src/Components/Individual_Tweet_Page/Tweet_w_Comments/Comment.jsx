import { useState, useEffect } from "react"
import './Comment.css'
// import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import PublishIcon from "@material-ui/icons/Publish";
import {useNavigate} from 'react-router-dom'


function Comment({commentData}){
  const [isFavorite, setIsFavorite] = useState(false);
  const [commentAuthor, setCommentAuthor] = useState([])
  const [done, setDone] = useState(false)
  let navigate = useNavigate()

  useEffect(()=>{
    fetch(`http://127.0.0.1:3000/users/${commentData.user_id}`)
    .then(r => r.json())
    .then(data =>{
      setCommentAuthor(data) 
      setDone(true)
    })
  }, []);

  // let navigate = useNavigate()
  function favorite(){
    //make route to add like to comment from user based on session
    setIsFavorite(!isFavorite);
  }
  function showMore(e){ 
    if(e.target.id !== 'icon'){
    // localStorage.setItem('selected_tweet', tweet_id )
    // localStorage.setItem('tweet_author', username )
    navigate('/moreInfo')
    } else{
      return
    }
  }
  if(done){
   return (
     
        <div className="post"  id={commentData.id}>
           {console.log(commentAuthor)}
        
        <div className="post__avatar">
            <Avatar src={commentAuthor.profile.profile_pic} />
          </div>
          <div className="post__body">
            <div className="post__header">
              <div className="post__headerName">
                <h3>
                  {commentAuthor.profile.display_name}{" "}
                  <span className="post__header-Special">
                     @{commentAuthor.username}
                  </span>
                </h3>
              </div>
              <div className="post__header" id={commentData.id}>
                <p>{commentData.text}</p>
              </div>
            </div>
        
            <div className="post__footer">
            <span className="icon-comment icon" id="icon">
              <ChatBubbleOutlineIcon fontSize="small" id="icon"/>
              {commentData.comment_count}
            </span>
            <span  onClick={favorite} className={isFavorite ? " icon-like icon liked": 'icon-like icon'} id="icon">
              {isFavorite ? <FavoriteOutlinedIcon fontSize="small" id="icon"/> :  <FavoriteBorderIcon fontSize="small" id="icon"/>}
              {commentData.like_count}
            </span>
            <span className="icon-download icon" id="icon">
              <PublishIcon fontSize="small" id="icon"/>
            </span>
            </div>
          </div> 
        </div>
      );
    }else {
      return (
        <>
        </>
      )
  }
  }
    


export default Comment