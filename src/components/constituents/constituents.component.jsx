import React from 'react';



const Constituent=({region})=>{
    const {constitiuents}=region;
    
    return(
        <table >
            <thead >
                 <tr>
                <th>Constitiuent Name</th>
                <th>Ballots Issued</th>
                <th>Ballots Used</th>
                <th>Ballots Wasted</th>
                <th>Voters Registerd</th>
                <th>Voters Voted</th>
            </tr>
            </thead>
           <tbody >
                {constitiuents.map((element,index) => <tr key={index} >
                <th>{element.name}</th>
                <th style={{textAlign:'center'}}>{element.balotsIssued}</th>
                <th style={{textAlign:'center'}}>{element.ballotsUsed}</th>
                <th style={{textAlign:'center'}}>{element.votersVoted-element.ballotsUsed}</th>
                <th style={{textAlign:'center'}}>{element.votersRegisterd}</th>
                <th style={{textAlign:'center'}}>{element.votersVoted}</th>
             </tr>
          )}</tbody>
        </table>
    );

}
export default Constituent;