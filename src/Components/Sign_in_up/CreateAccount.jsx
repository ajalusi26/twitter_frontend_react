import React from "react";
import { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom"
// Css
import './Sign_in_up.css';

function CreateAccount(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState("")
    const [displayName, setDisplayName] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        fetch('http://127.0.0.1:3000/is_logged_in')
        .then(r => r.json())
        .then(data => {
            if(data.username){
                navigate('/HomePage')
            }else{
                return
            }
        })
    }, [])
    
    function createUser(e){
        e.preventDefault()
        let newUserData = {
            username: username, 
            password: password,
            display_name: displayName
        }
        fetch('http://127.0.0.1:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUserData),
            })
            .then(response => response.json())
            .then(data => {
            {
                console.log(data)    
                navigate('/HomePage')
            }
        })
        setPassword('')
        setUsername('')
    }


    return (
        <div className="wrapper">
            <div className="form-holder">
        
                <img className='login-logo' src="https://static.dezeen.com/uploads/2012/06/dezeen_twitter-bird.gif"></img>
            
                <h2 className='login-title'>Create a Twitter Account</h2>
                <form onSubmit={createUser}>
                    <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                    <br></br>
                    <input type="text" placeholder="Display Name" value={displayName} onChange={(e)=>setDisplayName(e.target.value)} />
                    <br></br>
                    <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button type="submit" >Create User</button>
                    <Link to={"/"} className="link">Already have an account? Click to sign in</Link>
                </form>
            </div>
        </div>
    )
}

export default CreateAccount