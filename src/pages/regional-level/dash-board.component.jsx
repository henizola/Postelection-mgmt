import React from 'react';
import './dashboard.styles.css'
import Dashboard from '../../components/dashboard/dashboard.component';
import Home from '../../components/home/home.component';

class RegionalDashBoard extends React.Component{

            constructor(props){
                super(props);
                this.state={
                    region:{
                    name:'Oromiya',
                    votersRegisterd:200,
                    votersVoted:150,
                    constituents:{
                                numberOfConstituents:4,
                                name:['Bishoftu','Dukam','mojo']
                    }

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
                    {this.props.history.location.pathname==='/region/Home'?<Home {...this.state}/>:
                    this.props.history.location.pathname==='/region/Other'?<Home name={'home'}/>
                    :this.props.history.location.pathname==='/region/Constitiuents'?<Home name={'constitiuents'}/>:<div></div>}
    
                    </div>
                </div>
        );
    }



}
export default RegionalDashBoard;








