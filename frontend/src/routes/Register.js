import React,{useState} from 'react'
import "../static/Register.css"
import axios from 'axios'
export const Register = () => {
    const [ username, setUsername] = useState('')
    const [ password, setPassword] = useState('')
    const submit =()=>{
       
        axios.post('http://localhost:5000/api/books/user/login',{username,password}).then(user=>{
        console.log(user)
        localStorage.setItem('token',user.data.token)
        }
        ).catch(err=>{
            console.log(err)
        })

        
    }
    return( 
        <div>
            <input type="text" placeholder="Enter Username" value={username} onChange={event => setUsername(event.target.value)} />
            <input type="password" placeholder="Enter Password" value={password} onChange={event => setPassword(event.target.value)} />
            <button onClick={submit}>Submit</button>
        </div>
    )
}