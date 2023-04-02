import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

// import Advisory from './components/Dashboard/Advisory';
// import Commonman from './components/Dashboard/Commonman';
import './App.css';
import Registration from './components/Registration';
import HomePage from './components/HomePage';
import Login from './components/Login';
import CommonMan from './components/Dashboard/CommonMan';
import Advisory from './components/Dashboard/Advisory';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/> 
          {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/common' element={<CommonMan/>}/>
          <Route path='/advisory' element={<Advisory/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
