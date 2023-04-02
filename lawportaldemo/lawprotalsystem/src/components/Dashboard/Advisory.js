import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link ,useLocation} from 'react-router-dom';
import "./Dashboard.css"
//import img from '../images/2jpg.jpg'
function Advisory()
{
    const [nameq,setQ]=useState([]);
    const [answer,setAnswer]=useState("");
    const [array,setArray]=useState([]);
    const location=useLocation();
    const handleAnswer=(e)=>{
        e.preventDefault();
        
        //console.log(ans);
        setArray([...array,answer]);
        setAnswer('');
        const answer_username=location.state.username;
        console.log(answer_username);
        //console.log('id:'+e.target.value);
        //let ans={answer,answer_username};
        fetch(`http://localhost:8092/addanswers/${e.target.value}`,{
            method:"Post",
            headers:{"Content-Type":"application/json"},
                body:JSON.stringify({answer_text:answer,user:answer_username},e.target.value)
                }).then(()=>{
                    alert("Answer added",{answer_text:answer,user:answer_username});
        })
        
    }
   
    useEffect(()=>{
        axios.get("http://localhost:8092/questions/getAll"
            ).then(response => {
                
                console.log("details",response.data)
                setQ(response.data)
                
                //  console.log("username",response.question_username)
                
            }).catch(Error => {
                alert("Didn't receive data");
            });

    },[])
    return(
        <div className='const'>
            <div>
            <header>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"/>
                <h1>Advisory</h1>
                <Link to="/">HomePage</Link>
                <div className="row" >
                        <div className="col">Category: {location.state.options}</div>
                        <div className="col">Advisor: {location.state.username}</div>
                    </div>
            </header>      
            <div>   
                
            <br/>  
                <div className='cardss'>
                    {nameq?.map((qq)=>
                    {
                        return(
                            <div className='grid gg'>
                                <div className='card'>
                                    <div className='card-header'>
                                        Username: {qq.user}
                                    </div>
                                    <div className='body'>
                                        <h5 className='card-title'>Title: {qq.title}</h5>
                                        <p className='card-text'>Q:{qq.question_id} {qq.question_text}</p>
                                        
                                    </div>
                                    <div>
                                    <input type="text" placeholder='enter the advice' value={answer} onChange={(e)=>setAnswer(e.target.value)}/>
                                    <button onClick={handleAnswer} value={qq.question_id}>Answer</button>
                                        {
                                            array.map((a)=>{
                                                return(
                                                    <div>
                                                        <p>{a}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                        </div>
                                    </div>
                                
                                <div>
                                {/* <input type="text" placeholder="enter the advice"/>
                                    <button onClick={handleAnswer} value={qq.id}>Answer</button> */}
                                    
                                </div>
                            </div>
                            
                            
                        )
                    })}
                </div>
        </div>
        </div>
        </div>
        
    )
}
export default Advisory