import { useState } from "react";
import {Link} from "react-router-dom";
import "./Registration.css";
function Registration()
{
    const [username,setName]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const[options,setOptions]=useState('');
    
    const handleClick=(e)=>
    {
        e.preventDefault();
        
        const data={username,password,email,options};
            if(username === null || username === 'undefined' || username === '') {
                alert("Username cannot be empty");
                return;
            } else if(password === null || password === 'undefined' || password === '') {
                alert('Password cannot be empty');
                return;
            } 
            else if(password.length < 8) {
                alert('Password length should be minimum of 8 characters');
                return;
            }
            else if(data.options === '' || data.options=== 'undefined')
            {
                alert("Please select value from dropdown")
                return;
            }
           
        console.log(data.username);
        console.log(data);
        fetch("http://localhost:8092/user/add",{
            method:"Post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        }).then(()=>{
            console.log("New user added")
            alert("New user added")
        })
        
    }

    return(
        <form className="bg-cont">
            <header className="head">
                <Link to="/">Back</Link>
            </header>
            <h1 className="title">Registration</h1> 
            <div className="App">
            
            <input className="pv" type="text" placeholder="enter name" value={username} onChange={(e)=>setName(e.target.value)}/><br/>
            <input className="pv" type="email" placeholder="enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
            <input className="pv" type="password" placeholder="enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
            <select onChange={(e)=>setOptions(e.target.value)} value={options}>
            <option value="None">None</option>
            <option value="common man">Common man</option>
            <option value="lawyer">Lawyer</option>
            <option value="judicial officals">Judicial Officials</option>
            <option value="law student">Law Student</option>
            </select>

            <br/>
            <button onClick={handleClick}>Submit</button>
            </div>
            
         
        </form>
    )
}
export default Registration;