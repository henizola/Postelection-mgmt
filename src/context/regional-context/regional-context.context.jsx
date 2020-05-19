import React, { createContext } from "react"

export const RegionContext = createContext()

export class RegionProvider extends React.Component {
  state = {
    isSigndIn: true,
    name: "Oromiya",
    ballotsIssued: [1000, 2000],
    constitiuents: [
      {
        name: "Dukam",
        balotsIssued: [10400, 10600],
        ballotsWasted: 0,
        ballotsUnused: 0,
        votersRegisterd: 89,
        votes: 0,
      },
      {
        name: "Mojo",
        balotsIssued: [10600, 10800],
        ballotsWasted: 0,
        ballotsUnused: 0,
        votersRegisterd: 89,
        votes: 0,
      },
      {
        name: "Gelan",
        balotsIssued: [10800, 11000],
        ballotsWasted: 0,
        ballotsUnused: 0,
        votersRegisterd: 89,
        votes: 0,
      },
      {
        name: "Adama",
        balotsIssued: [10100, 10200],
        ballotsWasted: 0,
        ballotsUnused: 0,
        votes: 0,
        votersRegisterd: 89,
      },
    ],
  }
  getRegisterd = () => {
    let regist = 0
    console.log(this.state.constitiuents)
    this.state.constitiuents.map((city) => (regist += city.votersRegisterd))
    return regist
  }
  getVoted = () => {
    let vote = 0
    this.state.constitiuents.map((city) => (vote += city.votes))
    return vote
  }
  addData = (west, vote, unused) => {
    let used = [...this.state.constitiuents]
    used.push({
      name: "Bishoftu",
      balotsIssued: [10200, 10400],
      ballotsWasted: west,
      ballotsUnused: unused,
      votersRegisterd: 89,
      votes: vote,
    })
    this.setState({ constitiuents: used })
    console.log(used)
  }

  render() {
    return (
      <RegionContext.Provider
        value={{
          region: this.state,
          registerd: this.getRegisterd,
          getVoted: this.getVoted,
          addData: this.addData,
        }}
      >
        {this.props.children}
      </RegionContext.Provider>
    )
  }
}
