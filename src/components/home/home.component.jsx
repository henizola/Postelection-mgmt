import React from 'react';
import './home.styles.css'
import { RegionContext } from '../../context/regional-context/regional-context.context';
const Home=({region})=>{
 return( 
        <div className="home-container">
        
             <RegionContext.Consumer>
                 {
                     context=><React.Fragment>
                          <div className='item'>
                            <h2 className='constitiuents'>constituents in region {context.region.name}</h2>
                              <hr></hr>
                            <h1 className='constitiuents'>{context.region.constitiuents.length}</h1>
                         </div> 
                         <div className='item'>
                            <h2 className='constitiuents'>voters Registerd</h2>
                            <hr></hr>
                            <h1 className='constitiuents'>{context.registerd}</h1>
                         </div>
                        <div className='item'>
                            <h2 className='constitiuents'>voters voted</h2>
                            <hr></hr>
                            <h1 className='constitiuents'>{context.getVoted}</h1>
                        </div>
                     </React.Fragment>

                     
                 }
             </RegionContext.Consumer>
            
             
            
     
         
       
        </div>
    )
}
export default Home;