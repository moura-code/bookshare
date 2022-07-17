import React,{useState}from 'react'
import "../static/Header.css"
import { Link } from 'react-router-dom';
export const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const nav = () => {
        setIsActive(!isActive)
    }
    return( 
        <div className='header'>
            <h1>WikiBook</h1>
            <ul className='links'style={{
                height: isActive ? "calc(100vh - 500px)": 0,
                overflowY: isActive ? 'overflowY: auto' : '',
        }}>
                <li><Link to='/' className='link'>Home</Link></li>
                <li><Link to='/register' className='link'>Register</Link></li>
                <li><Link to='/login' className='link'>Login</Link></li>
                <li><Link to='/register' className='link'>Books</Link></li>
            </ul>
            <div className='icon' onClick={nav}
            >
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
        </div>
    )
}