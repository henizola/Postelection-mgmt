import React from 'react';
import SignIn from './pages/sign-in/sign-in.page';
import {Header} from './components/Header/header.component'
import './app.css'
import {Route} from 'react-router-dom'
import RegionalDashBoard from './pages/regional-level/dash-board.component';
import ConstituentLevel from './pages/constituent-level/consituent.component';
import { RegionProvider } from './context/regional-context/regional-context.context';


function App() {
  return (
    <div className="App">
      <div className="head">
          <div className='logo'></div>
          <div className='header'>
            <Header />
          </div>
      </div>
          <RegionProvider>
            <div className='body'>
          <Route exact path='/' component={SignIn}/>
          <Route  path='/region' component={RegionalDashBoard}/>
          <Route  path='/constituent' component={ConstituentLevel}/>
        </div>
          </RegionProvider>
        
        <div className='footer'>
          
        </div>
    </div>
  );
}

export default App;
