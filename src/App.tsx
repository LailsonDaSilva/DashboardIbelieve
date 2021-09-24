
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/Index';
import { Signin } from './pages/Signin/Index';
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
    
   <Route path="/" exact component={Signin} />
{/*    <Route path="/Signup" exact component={Signup} /> */}
   <Route path="/dashboard"  component={Dashboard} /> 
   </BrowserRouter>
  );
}

export default App;
