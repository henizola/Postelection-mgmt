import React from 'react';
import './dashboard.styles.css'
import Dashboard from '../../components/dashboard/dashboard.component';
import Home from '../../components/home/home.component';
import Constituent from '../../components/constituents/constituents.component'
class RegionalDashBoard extends React.Component{

            constructor(props){
                super(props);
                this.state={
                    region:{
                    name:'Oromiya',
                    votersRegisterd:200,
                    votersVoted:150,
                    constitiuents:[
                        {balotsIssued:100,ballotsUsed:78,name:'Bishoftu',votersRegisterd:89,votersVoted:75},
                        {balotsIssued:100,ballotsUsed:80,name:'Dukam',votersRegisterd:70,votersVoted:70},
                       {balotsIssued:100,ballotsUsed:27,name:'Mojo',votersRegisterd:30,votersVoted:25},
                        {balotsIssued:100,ballotsUsed:45,name:'Gelan',votersRegisterd:30,votersVoted:25},
                        {balotsIssued:100,ballotsUsed:30,name:'Batu',votersRegisterd:30,votersVoted:25},
                        {balotsIssued:100,ballotsUsed:50,name:'Adama',votersRegisterd:30,votersVoted:25},
                        {balotsIssued:100,ballotsUsed:80,name:'Bale-robe',votersRegisterd:100,votersVoted:75},
                        {balotsIssued:100,ballotsUsed:52,name:'Asebe-teferi',votersRegisterd:70,votersVoted:70},
                        {balotsIssued:100,ballotsUsed:14,name:'Asela',votersRegisterd:30,votersVoted:25},
                        {balotsIssued:100,ballotsUsed:14,name:'Dodola',votersRegisterd:30,votersVoted:25},
                        {balotsIssued:100,ballotsUsed:45,name:'Shewa',votersRegisterd:30,votersVoted:25},
                        {balotsIssued:100,ballotsUsed:47,name:'Adami-tulu',votersRegisterd:30,votersVoted:25}]
                    

                    }
                }
            }


    render(){
        
        return(
                <div className='dashboard-container'>
                    <div className="dashboard">
                       <div><Dashboard  props={this.props} name={'Home'}/></div> 
                       <Dashboard  props={this.props} name={'Constitiuents'}/> 
                        <Dashboard  props={this.props} name={'Other'}/>
                    </div>
                
                
                    <div className="display">
                    {this.props.history.location.pathname==='/region/Home'||this.props.history.location.pathname==='/region'?<Home {...this.state}/>:
                    this.props.history.location.pathname==='/region/Other'?<Home name={'home'}/>
                    :this.props.history.location.pathname==='/region/Constitiuents'?<Constituent {...this.state}/>:<div></div>}
    
                    </div>
                </div>
        );
    }



}
export default RegionalDashBoard;








