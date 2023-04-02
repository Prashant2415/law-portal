import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css'
import {Link} from 'react-router-dom'
import './Dashboard/Dashboard.css'

function Login()
{
    const [username,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [options,setOptions]=useState('');
    const nav=useNavigate();
    
    const handleChange=(e)=>
    {
        e.preventDefault();
        const data={username,password,options};
        console.log("data",data);
        console.log("Name",username);
        if(username=== null || username ==='undefined' || username === '')
        {
            alert("Userame cannot be empty")
            return;
        }
        else if(password === null || password ==="undefined" || password === '')
        {
            alert("Password cannot be empty")
            return;
        }
        else if(password.length < 8) 
        {
            alert('Password length should be minimum of 8 characters');
            return;
        }
        else if(options === '' || options === 'undefined')
            {
                alert("Please select value from dropdown")
                return;
            }
        axios.get(`http://localhost:8092/user/`+username
            ).then(response => {
                console.log("name",response)
                console.log("options",options)
                if(response.data != null) 
                {
                    if(response.data.options === "common man") {
                        alert(`Welcome ${username}`)
                        //nav("/commonman")
                        //console.log("responsedataoptions ",response.data.options)
                        nav("/common",{state:{username:username}})
                        return;  
                    }
                   else{
                      alert(`Login successfully ${username}`)
                      nav("/advisory",{state:{username:username,options:options}})    
                      return;
                   }
                    
                }
                alert("Password not matched")
                
                
            }).catch(Error => {
                alert("User not found");
            });
}
    return(
        <div>
            <form className="container">
            <header className="head">
                <Link to="/">Back</Link>
            </header>
            <div className="log">
            <h3 className="title">Login</h3>
            <div className="App">
            <input type="text" placeholder="enter name" value={username} onChange={(e)=>setUserName(e.target.value)}/><br/>
            <input type="password" placeholder="enter password" maxLength="8" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
            <select onChange={(e)=>setOptions(e.target.value)} value={options}>
            <option value="None">None</option>
            <option value="common man">Common man</option>
            <option value="lawyer">Lawyer</option>
            <option value="judicial officals">Judicial Officials</option>
            <option value="law student">Law Student</option>
            </select>
            <button onClick={handleChange}>Login</button>
            </div>
            </div>    
        </form>
        </div>
        
    )
}
export default Login