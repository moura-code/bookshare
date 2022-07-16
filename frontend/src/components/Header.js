import React from 'react'
import "../static/Header.css"
import { Link } from 'react-router-dom';
export const Header = () => {

    return( 
        <div className='header'>
            <h1>Home</h1>
            <ul>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Books</Link></li>
            </ul>
        </div>
    )
}