import styled from "styled-components"

export const DashboardContainer = styled.div`
  width: 90vw;
  margin: auto;
  margin-top: 10px;
  display: grid;

  grid-gap: 2px;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 80vh;
  grid-template-areas: "dashboard display";
  border-radius: 10px 10px;
  @media (max-width: 768px) {
    width: 90vw;
    margin: auto;
    margin-top: 10px;
    display: grid;
    grid-gap: 2px;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr;
    grid-template-areas: "dashboard" "display";
    border-radius: 10px 10px;
    margin-bottom: 10px;
  }
`
export const Display = styled.div`
  grid-area: display;
  @media (max-width: 768px) {
    grid-area: display;
    width: 100%;
    margin-top: 25px;
  }
`
export const Dashboards = styled.div`
  grid-area: dashboard;
  @media (max-width: 768px) {
    grid-area: dashboard;
    border-right: 2px solid rgba(128, 128, 128, 0.5);
    display: grid;
    margin-bottom: 10px;
    grid-template-columns: repeat(auto-fill, 140px);
  }
`
