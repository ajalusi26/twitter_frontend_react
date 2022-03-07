import {useState, useEffect} from 'react'
import './TweetPage.css'

function TweetPage({tweetPage, setTweetPage}){
    useEffect(() => {
        //:id in route is the tweet id, make it dynamic
     fetch(`http://127.0.0.1:3000/tweets/${localStorage.selected_tweet}`)
     .then(r => r.json())
     .then(data => {
      console.log(data)
      
    })
    }, []);
  
    return(
        <div className="container">
             <div className="header">
        <h2>Tweet</h2>
      </div>
           {/* {setTweetPage(!tweetPage)} */}
            
        </div>
    )
}

export default TweetPage