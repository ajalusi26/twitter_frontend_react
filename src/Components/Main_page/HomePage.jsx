import {useEffect, useState} from 'react'
import Sidebar from './Sidebar/Sidebar.jsx'
import Feed from './Feed/Feed.jsx'

import './BaseLineCss.css'

function HomePage() {

 

    return (
        
        <div className="app">
    <Sidebar/>
       <Feed />
        </div>
    )
}

export default HomePage