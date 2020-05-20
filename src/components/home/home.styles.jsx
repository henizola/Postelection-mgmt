import styled from "styled-components"

export const HomeContainer = styled.div`
  margin-top: 25px;
  margin-left: 10px;
  width: 65vw;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  @media (max-width: 768px) {
    margin-top: 5px;
    margin-left: 10px;
    width: 90vw;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-template-rows: repeat(autofill, 150px);
  }
`
export const Item = styled.div`
  height: 150px;
  border: 1px solid black;
  border-radius: 5px 5px;
  box-shadow: 3px 4px gray;
  @media (max-width: 768px) {
    height: 100px;
  }
`
export const Constitiuents = styled.h2`
  margin-top: 0px;
  text-align: center;
  font-size: 30px;
  @media (max-width: 768px) {
    margin-top: 0px;
    text-align: center;
    font-size: 14px;
  }
`
export const HorizontalLine = styled.hr`
  width: 70%;
`
