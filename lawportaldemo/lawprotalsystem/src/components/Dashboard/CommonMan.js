import { useState } from "react";
import {Link,useLocation} from "react-router-dom"

function CommonMan()
{
    const [question,setQuestion]=useState("");
    const [title,setTitle]=useState("");
    const [arr,setArr]=useState([]);
    const [d,setD]=useState([]);
    var query=[];
    const location=useLocation();
    const handleChange=(e)=>{
        e.preventDefault();
        let qa={question}
        var myMap = new Map();
        
        var question_username=location.state.username;
        //console.log("Question username",question_username);
        
        console.log("Username",location.state.username)
        query=[...query,qa]
        console.log("MapValues",myMap) 
        setArr([...arr,question]);
        setQuestion('')
        console.log('title',title);
        if(title === 'none' || title === 'undefined' || title === '') {
            alert('Please select category');
            return;
        } 
        myMap.set('question', question);
        //console.log("Question",question)
        myMap.set('username',question_username);
        myMap.set('title',title)
        const result=Object.values(myMap);
        setD([...d,result])
        console.log(arr);
        console.log("result",result)        
        fetch("http://localhost:8092/questions/addquestions",{
            method:"Post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({question_text:question,user:question_username,title:title})
        }).then(()=>{
            alert("Question Added");
        })
    }
    return(
        <div>
            <header><h1>Common Man</h1>
            <Link to="/">HomePage</Link></header>
            <div className="display the username">
                <h3>Username: {location.state.username}</h3>
            </div>
            <div>
            <form>
                
                <input type="text" placeholder="enter question" value={question} onChange={(e)=>setQuestion(e.target.value)}/><br/>
                <select value={title} onChange={(e)=>setTitle(e.target.value)}>
                    <option value="none">None</option>
                    <option value="family">Family</option>
                    <option value="tax">Tax</option>
                </select><br/>
                
                <button onClick={handleChange}>Post</button>               
            </form>
            </div>
            
            
            <div className="todisplayquestions">
                {arr.map((a)=>{
                    return(
                        <div>
                            <p>Question: {a}</p>
                        </div>
                    )
                })}
            </div>
            
        </div>
        //her we will call the QANDA values from the database
    )
}
export default CommonMan;