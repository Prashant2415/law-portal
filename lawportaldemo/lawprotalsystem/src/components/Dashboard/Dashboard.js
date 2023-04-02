import { useEffect, useState } from "react"
import axios from 'axios'
import "./Dashboard.css"
function Dashboard()
{
    const [all,setAll]=useState([])
    const [title,setTitle]=useState('');
   // const [ass,setAss]=useState([])
   const [isDataAvailable, setIsDataAvailable] = useState(false);
   const handleSearch=(e)=>
   {
    e.preventDefault();
    
    axios.get(`http://localhost:8092/getQuestionAndAnswerTitle/${title}`)
        .then(res=>{
            console.log(res.data)
            if(res.data === null || res.data === 'undefined' || res.data.length === 0) {
                setIsDataAvailable(false);
                return;
            }
            setIsDataAvailable(true);
            setAll(res.data)
        }).catch(err=> console.log(err))
    }
   
    useEffect(()=>
    {
        axios.get('http://localhost:8092/getQuestionAndAnswer')
        .then(res=>{
            console.log(res.data)
            let abc=JSON.stringify(res)
            console.log("Values ",abc)
            if(res.data === null || res.data === 'undefined'|| res.data.length === 0) {
                setIsDataAvailable(false);
                return;
            }
            setIsDataAvailable(true);
            //console.log(res.data[0].answers[0].answer_text)
            //console.log(res.data[0].answers)
            setAll(res.data)
        }).catch(err=> console.log(err))
    },[])
    return(
        <div>
            <h1>Dashboard</h1>
            <div className="forsearch">
                <input type="text" placeholder="enter title to be searched" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>
            </div>
            {isDataAvailable ? (
            <div className="ccc gg">

            {all.map((a,index)=>
            {
            return(
                    <div key={index} className="card">
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"/>
                        
                    <div className="card-header">Username: {a.user}
                    </div>
                        <div className="card-body">
                            <h5 className="card-title">Title: {a.title}</h5>
                            <p className="card-text">Q: {a.question_id} {a.question_text}</p>
                            <div className="hr">
                                    <h5 className="card-header">Adviced By:  {a.answers[0].user}</h5>
                                    <p className="card-header">Highest Rated Answer: {a.answers[0].answer_text}</p>
                                </div>
                                <br/>
                                {a.answers.map((as,i)=>
                                    {
                                        return(
                                        <div key={i} className="text-secondary">
                                            <h5 className="card-header">Adviced By:  {as.user}</h5>
                                            <p className="card-header">Answer: {as.answer_text}</p>
                                        </div>
                                        )
                                })}
                        </div>
                       
                             
                    </div>
                    
                )
                
            })}

        </div>
        ) : (<div className="inmiddle"><b>No Data Available</b></div>)}
        </div>
        

    )
}
export default Dashboard