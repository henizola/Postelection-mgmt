import React, { createContext } from "react"

export const RegionContext = createContext()

export class RegionProvider extends React.Component {
  state = {
    isSigndIn: true,
    name: "Oromiya",
    ballotsIssued: [1000, 2000],
    constitiuents: [],
  }
  getRegisterd = () => {
    let regist = 0
    console.log(this.state.constitiuents)
    this.state.constitiuents.map(city => (regist += city.votersRegisterd))
    return regist
  }
  getVoted = () => {
    let vote = 0
    this.state.constitiuents.map(city => (vote += parseInt(city.votes, 10)))
    return vote
  }
  addData = (west, vote, unused, cname) => {
    let used = [...this.state.constitiuents]
    used.push({
      name: cname,
      balotsIssued: [
        Math.floor(Math.random() * 1000) + 1,
        Math.floor(Math.random() * 2000) + 1,
      ],
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
