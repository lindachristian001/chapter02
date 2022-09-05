import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail';
import logo from './assest/logo.svg';
import './App.css';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header logo={logo}/>
      <Routes>
        <Route path = '/'element={<Profile userName='lindachristian001' />}
        />
<Route path = '/projects' element={<Projects userName='lindachristian001'/>} />
<Route path='/Projects/:name' element ={<ProjectDetail userName='lindachristian001' />}
        />
        </Routes>
        </BrowserRouter>      
    </div>
  );
}

export default App;
