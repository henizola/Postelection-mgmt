import React, {createContext}from "react";

export const RegionContext=createContext();

export class RegionProvider extends React.Component{
    state={
        region:[
            {name:'Oromiya',
            ballotsIssued:[1000,2000],
            constitiuents:[
                        {name:'Bishoftu',
                            balotsIssued:[10200,10400],
                            ballotsWasted:[],
                            ballotsUnused:[],
                            votersRegisterd:89,
                            votes:[],
                            votersVoted:[]},
                        {name:'Dukam',
                            balotsIssued:[10400,10600],
                            ballotsWasted:[5],
                            ballotsUnused:[],
                            votersRegisterd:89,
                            votes:[],
                            },
                        {name:'Mojo', 
                            balotsIssued:[10600,10800],
                            ballotsWasted:[],
                            ballotsUnused:[7],
                            votersRegisterd:89,
                            votes:[],
                            },
                        {name:'Gelan',
                            balotsIssued:[10800,11000],
                            ballotsWasted:[],
                            ballotsUnused:[1,1,2,3,4,5,6,],
                            votersRegisterd:89,
                            votes:[],
                            },
                        {name:'Adama',
                            balotsIssued:[10100,10200],
                            ballotsWasted:[],
                            ballotsUnused:[],
                            votes:[14],
                            votersRegisterd:89,}
                    ]
                }
        ]
    }
    getRegisterd=()=>{
        let regist=0;
        this.state.region[0].constitiuents.map(city=>regist+=city.votersRegisterd)
        return regist;
    }
    getVoted=()=>{
        let vote=0;
        this.state.region[0].constitiuents.map(city=>vote+=city.votes.length)
        return vote;
    }
render(){

     return(
        <RegionContext.Provider value={
            {
                region:this.state.region[0],
                registerd:this.getRegisterd(),
                getVoted:this.getVoted()
            }
        }>
            {
                this.props.children
            }

        </RegionContext.Provider>
    );
}
   



}
 