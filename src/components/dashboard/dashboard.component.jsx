import React from 'react';
import {Dashcontainer} from './dashboard.styles'

const Dashboard=({props,name})=>{
  
    return( <div >
               <Dashcontainer onClick={()=>props.history.push(`${props.match.url}/${name}`)}>
                    {name}
                    </Dashcontainer>
                {/* <Dashcontainer onClick={
                                ()=>props.history.push(`${props.match.url}/constitiuents`)
                            }>Constitiuents</Dashcontainer>
                <Dashcontainer
                onClick={
                    ()=>props.history.push(`${props.match.path}/other`)
                }
                >Other</Dashcontainer> */}

            </div>

    );
}
export default Dashboard;