import React from 'react';
import { RegionContext } from '../../context/regional-context/regional-context.context';



const Constituent=()=>{
    
    return(
        <RegionContext.Consumer>
                   {
                       context=><table >
            
            <thead >
                <tr> 
                <th >Constitiuent Name</th>
                <th>Voters Registerd</th>
                <th>Ballots Issued</th>
                <th>Ballots Used</th>
                <th>Ballots Un-Used</th>
                <th>Ballots Wasted</th>
                <th>Voters Voted</th>
            </tr>
            </thead>
           
               <tbody> 
                {context.region.constitiuents.map((element,index) =><tr key={index} >
                <th>{element.name}</th> 
                <th style={{paddingLeft:'55px'}}>{element.votersRegisterd}</th>
                <th>{element.balotsIssued[0]}-{element.balotsIssued[1]}</th>
                <th style={{paddingLeft:'35px'}}>{element.votes===0?<span>not submited</span>:element.votes}</th>
                <th style={{paddingLeft:'55px'}}>{element.ballotsUnused===0?<span>not submited</span>:element.ballotsUnused}</th>
                <th style={{paddingLeft:'55px'}}>{element.ballotsWasted===0?<span>not submited</span>:element.ballotsWasted}</th>
                <th style={{paddingLeft:'55px'}}>{element.votes===0?<span>not submited</span>:element.votes}</th>
             </tr>
          )}</tbody>
                
               
        </table>   }
               </RegionContext.Consumer>
    );

}
export default Constituent;