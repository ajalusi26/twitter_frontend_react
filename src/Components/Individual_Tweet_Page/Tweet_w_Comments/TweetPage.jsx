import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './TweetPage.css'

import Tweet from './Tweet'
import Comment from './Comment'
import WriteComment from './WriteComment'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';





function TweetPage(){
    const [tweetData, setTweetData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate() 
    useEffect(() => {
        //:id in route is the tweet id, make it dynamic
     fetch(`http://127.0.0.1:3000/tweets/${localStorage.selected_tweet}`)
     .then(r => r.json())
     .then(data => {
      console.log(data)
      setTweetData(data)
      setLoaded(!loaded)
    })
    }, []);

    function backToHome(){
        navigate('/HomePage')
    }
    if(loaded){
        return(
            <div className="container">
                 <div className="header">
                    <h2> <ArrowBackIcon className="arrow" onClick={backToHome}/>Tweet</h2>
                </div>
                <Tweet
                key={tweetData.id}
                comments={tweetData.comments}
                profile={tweetData.profile}
                user={tweetData.user}           
                comment_count={tweetData.comment_count}
                like_count={tweetData.like_count}
                retweet_count={tweetData.retweet_count}
                is_retweet={tweetData.is_retweet}
                tweet={tweetData.tweet}
                user_id={tweetData.user_id}
                tweet_id={tweetData.id}
              />
              <WriteComment/>
              {tweetData.comments.map((comment) => <Comment commentData={comment} key={comment.id}/>)}
            </div>
        )
    }else{
        return(
            <>
            </>
        )
    }
   
}

export default TweetPage