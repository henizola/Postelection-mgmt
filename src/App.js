import React from 'react';
import SignIn from './pages/sign-in/sign-in.page';
import {Header} from './components/Header/header.component'
import './app.css'
import {Route} from 'react-router-dom'
import RegionalDashBoard from './pages/regional-level/dash-board.component';


function App() {
  return (
    <div className="App">
      <div className="head">
          <div className='logo'></div>
          <div className='header'>
            <Header />
          </div>
      </div>
    
        <div className='body'>
          <Route exact path='/' component={SignIn}/>
          <Route  path='/region' component={RegionalDashBoard}/>
        </div>
        <div className='footer'>
          
        </div>
    </div>
  );
}

export default App;
