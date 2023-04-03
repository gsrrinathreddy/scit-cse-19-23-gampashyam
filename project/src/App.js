import React from 'react';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Aboutme from './pages/Aboutme';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Workshops from './pages/Workshops';
import Contactme from './pages/Contactme';
import Projects from './pages/Projects';
import './App.css';


function App() {
  return (
  <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>

     <Route path = "Aboutme" element ={<Aboutme/>}/>
     <Route path = "Experience" element ={<Experience/>}/>
      <Route path = "Hobbies" element ={<Hobbies/>}/> 
      <Route path = "Qualification" element ={<Qualification/>}/>
      <Route path = "Skills" element = {<Skills/>}/>
      <Route path = "Projects" element = {<Projects/>}/>
      <Route path = "Contactme" element ={<Contactme/>}/>
      <Route path = "Certifications" element ={<Certifications/>}/>
      <Route path = "Workshops" element ={<Workshops/>}/>
    </Routes>
     </BrowserRouter>
      
      </div>
  );
}

export default App;
