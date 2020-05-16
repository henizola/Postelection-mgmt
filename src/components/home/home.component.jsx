import React from 'react';
import './home.styles.css'

const Home=({region})=>{
    return(
        <div className="home-container">
         <div className='item'>
             <h2 className='constitiuents'>constituents in region{region.name}</h2>
             <hr></hr>
            <h1 className='constitiuents'>{region.constituents.numberOfConstituents}</h1>
        </div>
         
        <div className='item'>
             <h2 className='constitiuents'>voters Registerd</h2>
             <hr></hr>
            <h1 className='constitiuents'>{region.votersRegisterd}</h1>
        </div>
        <div className='item'>
             <h2 className='constitiuents'>voters voted</h2>
             <hr></hr>
            <h1 className='constitiuents'>{region.votersVoted}</h1>
        </div>
        </div>
    )
}
export default Home;