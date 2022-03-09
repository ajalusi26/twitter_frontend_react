import React, { useState } from "react";
import "./WriteComment.css";
import { Avatar, Button } from "@material-ui/core";

function WriteComment({setFeed, feed}){
    const [comment, setComment] = useState("");

    function sendComment(e){ 
        e.preventDefault();

        let toSend = {
          text: comment,
          user_id: localStorage.current_user, 
          tweet_id: localStorage.selected_tweet
        }
        setComment("")
        fetch('http://127.0.0.1:3000/new_comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(toSend),
            })
            .then(response => response.json())
            .then(data => {
                window.location.reload()
            })
    }
    
    return (
        <div className="tweetBox">
          <form>
            <div className="tweetBox__input">
                {/* get from session id */}
              <Avatar  src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640" style={{ width: '50px', height: '50px' }}/>
              <input
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                placeholder="Tweet your reply"
                type="text"
              />
            
    
            <Button
              onClick={sendComment}
              type="submit"
              className="tweetBox__tweetButton"
            >
              Reply
            </Button>
            </div>
          </form>
        </div>
      );
    }
    
    export default WriteComment;