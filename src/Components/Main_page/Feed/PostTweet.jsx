import React, { useState } from "react";
import "./PostTweet.css";
import { Avatar, Button } from "@material-ui/core";

function PostTweet({setFeed, feed}){
    const [tweetMessage, setTweetMessage] = useState("");

    function sendTweet(e){ 
        e.preventDefault();

        let toSend = {
          tweet: tweetMessage,
          user_id: localStorage.current_user
        }
        setTweetMessage("")
        fetch('http://127.0.0.1:3000/new_tweet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(toSend),
            })
            .then(response => response.json())
            .then(data => {
                setFeed([...feed, data])
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
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage}
                placeholder="What's happening?"
                type="text"
              />
            </div>
    
            <Button
              onClick={sendTweet}
              type="submit"
              className="tweetBox__tweetButton"
            >
              Tweet
            </Button>
          </form>
        </div>
      );
    }
    
    export default PostTweet;