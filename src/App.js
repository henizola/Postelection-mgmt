import React from 'react';
import SignIn from './pages/sign-in/sign-in.page';
import {Header} from './components/Header/header.component'
import './app.css'
import {Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <div className="header">
            <Header />
      </div>
    
        <div className='body'>
          <Route exact path='/' component={SignIn}/>
        </div>
        <div className='footer'>
          
        </div>
    </div>
  );
}

export default App;
