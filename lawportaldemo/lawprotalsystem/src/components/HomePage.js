import {Link} from "react-router-dom"
import './HomePage.css';
function HomePage()
{
    return(
        <div className='bg-container'>
            <header >
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"/>
                <nav>
                    <div className='logo'>
                        Legal Portal
                    </div>
                    <div className='linkss'>
                        <div className='login'>
                        <button>
                        <Link  to="/login">Login</Link>
                        </button>
                        </div>
                        
                        <div className='registration'>
                        <button>
                        <Link  to="/registration">Registration</Link>
                        </button>
                        
                        <button>
                        <Link  to="/dashboard">Dashboard</Link>
                        </button>
                        </div>
                        
                        
                    </div>
            
                </nav>
                
            </header>
        </div>
    )
}
export default HomePage;