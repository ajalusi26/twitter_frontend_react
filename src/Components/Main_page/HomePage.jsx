import {useEffect, useState} from 'react'
import Sidebar from './Sidebar/Sidebar.jsx'
import Feed from './Feed/Feed.jsx'
import RightPanel from '../Right_panel/RightPanel'
import './BaseLineCss.css'

function HomePage() {

 

    return (
        
        <div className="app">
        <Sidebar/>
        <Feed />
        <RightPanel/>
        </div>
    )
}

export default HomePage