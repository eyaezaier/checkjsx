import React from 'react';
import Profile from './components/profile/Profile';
import eya from './eya.jpg'
import './App.css'

const App = () => {
const handleName = (name) => {
    alert(`the name of the profile user is: ${name} `)
  }
  return (
  <div >
 < Profile handleName={handleName} fullName="eya ezzaier" bio="welcome" profession="student" > 
 <div className="img1">
 <img src={eya} alt='eya' /> 
 </div>
 </Profile>
  </div>

  );
};

export default App;

