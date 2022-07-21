
import React,{useContext} from 'react'
import "../static/MesageError.css"
import { AppContext } from '../context/appContext'
export const MesageError = () => {
    const { err }  = useContext(AppContext)
    
     if (err)return(<>
    <div className="alert alert-warning" role="alert">
    &#9888;     {err}
</div>


    </>)
}