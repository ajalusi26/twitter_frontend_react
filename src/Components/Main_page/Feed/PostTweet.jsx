import React, { useState } from "react";
import "./PostTweet.css";
import { Avatar, Button } from "@material-ui/core";

function PostTweet({setFeed, feed}){
    const [tweetMessage, setTweetMessage] = useState("");

    function sendTweet(e){ 
        e.preventDefault();
        fetch('http://127.0.0.1:3000/tweets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tweetMessage),
            })
            .then(response => response.json())
            .then(data => {
                setFeed([...feed, data])
            })
    }
    
    return (
        <div className="tweetBox">
          <form>
            <div className="tweetBox__input">
                {/* get from session id */}
              <Avatar  src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640" />
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