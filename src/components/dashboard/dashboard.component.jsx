import React from "react"
import { Dashcontainer } from "./dashboard.styles"

const Dashboard = ({ props, name }) => {
  return (
    <div>
      <Dashcontainer
        onClick={() => props.history.push(`${props.match.url}/${name}`)}
      >
        {name}
      </Dashcontainer>
    </div>
  )
}
export default Dashboard
