import React from "react";
import { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom"
// Css
import './Sign_in_up.css';

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        fetch('http://127.0.0.1:3000/is_logged_in')
        .then(r => r.json())
        .then(data => {
            console.log(data);
            // if(data.username){
            //     navigate('/HomePage')
            // }else{
            //     return
            // }
        })
    }, [])
    
    function login(e){
        e.preventDefault()
        let loginData = {
            username: username, 
            password: password
        }
        fetch('http://127.0.0.1:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
            })
            .then(response => response.json())
            .then(data => {
            {
                if(data.username){
                    console.log(data)
                   navigate('/HomePage')
                }
                else{
                    console.log(data)
                    // alert('Wrong username or password')
                }  
            }
        })
        setPassword('')
        setUsername('')
    }


    return (
        <div className="wrapper">
        <div className="form-holder">
    
            <img className='login-logo' src="https://static.dezeen.com/uploads/2012/06/dezeen_twitter-bird.gif"></img>
         
            <h2 className='login-title'>Sign in to Twitter</h2>
            <form onSubmit={login}>
                <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                <br></br>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit" >Login</button>
                <Link to={"/createAccount"} className="link">Dont have an account? Click here to create one!</Link>
            </form>
        </div>
        </div>
    )
}

export default Login