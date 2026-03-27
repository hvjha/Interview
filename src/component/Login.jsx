
import React, {useState,useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [data,setData] = useState(null);
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({name,password})
        setData({name,password});
        setName("");
        setPassword("");
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='username'/>
        <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
        {
            data && (
                <div>
                <h3>Submitted Data: </h3>
                <p>UserName : {data.name}</p>
                <p>Password : {data.password}</p>
                </div>
            )
        }
    </div>
  )
}

export default Login