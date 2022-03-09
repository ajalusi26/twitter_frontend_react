import {useEffect, useState} from 'react'

import Sidebar from '../Main_page/Sidebar/Sidebar'
import TweetPage from './Tweet_w_Comments/TweetPage'
import RightPanel from '../Right_panel/RightPanel'

import '../Main_page/BaseLineCss.css'

function IndividualTweetPage() {


    return (
        
        <div className="app">
        <Sidebar/>
        <TweetPage/>
        <RightPanel/>
        </div>
    )
}

export default IndividualTweetPage