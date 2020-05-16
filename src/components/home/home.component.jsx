import React from 'react';
import './home.styles.css'

const Home=({region})=>{
    let voted=0,voters=0;
    region.constitiuents.map(element=>{voters+=element.votersRegisterd;voted+=element.votersVoted})
    return(
        <div className="home-container">
         <div className='item'>
             <h2 className='constitiuents'>constituents in region{region.name}</h2>
             <hr></hr>
            <h1 className='constitiuents'>{region.constitiuents.length}</h1>
        </div>
         
        <div className='item'>
             <h2 className='constitiuents'>voters Registerd</h2>
             <hr></hr>
            <h1 className='constitiuents'>{voters}</h1>
        </div>
        <div className='item'>
             <h2 className='constitiuents'>voters voted</h2>
             <hr></hr>
            <h1 className='constitiuents'>{voted}</h1>
        </div>
        </div>
    )
}
export default Home;