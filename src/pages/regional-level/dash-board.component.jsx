import React from "react"
import Dashboard from "../../components/dashboard/dashboard.component"
import Home from "../../components/home/home.component"
import Constituent from "../../components/constituents/constituents.component"
import { DashboardContainer, Display, Dashboards } from "./dashboard.styles"
const RegionalDashBoard = props => {
  return (
    <DashboardContainer>
      <Dashboards>
        <Dashboard props={props} name={"Home"} />
        <Dashboard props={props} name={"Constitiuents"} />
        <Dashboard props={props} name={"Submit"} />
      </Dashboards>
      <Display>
        {props.history.location.pathname === "/region/Home" ||
        props.history.location.pathname === "/region" ? (
          <Home />
        ) : props.history.location.pathname === "/region/Constitiuents" ? (
          <Constituent />
        ) : (
          <div></div>
        )}
      </Display>
    </DashboardContainer>
  )
}

export default RegionalDashBoard
