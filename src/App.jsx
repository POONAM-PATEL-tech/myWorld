
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {Routes,Route} from 'react-router-dom';

function App() {
  
  return (
    <>
    
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='/ContactUs' element={<ContactUs/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path='SignUp' element={<SignUp/>}/>
    
    
    </Routes>
    
    
   </>
      
  );
}


export default App
 
