import React, { useState } from 'react'

const Form1 = () => {
    const[name,setName] = useState("");
    const[password,setPassword] = useState("");
    const[data,setData] = useState(null)

    const handlesubmit =(e) =>{
        e.preventDefault();
        setData({name,password});
        // console.log(name,password)
        setName("");
        setPassword("");
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <div>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name'/>
            </div>
            <div>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password'/>
            </div>
            <button type='submit'>Submit</button>
        </form>
        {data &&(
            <div>
                <h1>Submitted form data :</h1>
                <p>Name : {data.name}</p>
                <p>Password: {data.password}</p>
            </div>
        )}
    </div>
  )
}

export default Form1