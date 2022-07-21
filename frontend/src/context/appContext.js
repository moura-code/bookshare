import { createContext,useState ,useEffect} from "react";
import axios from "axios"
import { useNavigate} from "react-router-dom";
export const AppContext = createContext([]);

export function APP ({children}){
    
    const navigate = useNavigate();
    const [err,seterr]= useState('')
    const [ username, setUsername] = useState('')
    const [ password, setPassword] = useState('')
    const [loged,setloged]= useState(false)
    const [local,setlocal]= useState(false)
    useEffect(()=>{
        localStorage.getItem('token') ? setlocal(true):setlocal(false )
        

},[])
    useEffect(() => {
        local? setloged(false) : setloged(true)
    
    }, [local])
    const logout = ()=>{
        
        localStorage.removeItem('token');
        localStorage.removeItem('user')
        
        setlocal(false);
        window.location.reload(false);
        
    }
    const register =()=>{
        axios.post('http://localhost:5000/api/books/user/register' ,{ username,password}).then(user=>{
        localStorage.setItem('token',user.data.token)
        localStorage.setItem('user',user.data.user)
        setlocal(true)
        seterr('')
        navigate('/');
        window.location.reload(false);
        }
        ).catch(err=>{
            seterr(err.response.data.msg)
        })
    }
    const login =()=>{
      axios.post('http://localhost:5000/api/books/user/login' ,{ username,password}).then(user=>{
      localStorage.setItem('token',user.data.token)
      
      localStorage.setItem('user',user.data.user)
      setlocal(true)
      seterr('')
      navigate('/');
      window.location.reload(false);
      }
      ).catch(err=>{
          seterr(err.response.data.msg)
      })
  }

      return(
      <AppContext.Provider value={{register,setUsername,setPassword,username,password, err,seterr,loged,login,logout }}>
          {children}
      </AppContext.Provider>)
}