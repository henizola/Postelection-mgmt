import React from "react"
import { RegionContext } from "../../context/regional-context/regional-context.context"
import {
  HomeContainer,
  Item,
  Constitiuents,
  HorizontalLine,
} from "./home.styles"
const Home = ({ region }) => {
  return (
    <HomeContainer>
      <RegionContext.Consumer>
        {context => (
          <React.Fragment>
            <Item>
              <Constitiuents>
                constituents in region {context.region.name}
              </Constitiuents>
              <HorizontalLine></HorizontalLine>
              <Constitiuents>
                {context.region.constitiuents.length}
              </Constitiuents>
            </Item>
            <Item>
              <Constitiuents>voters Registerd</Constitiuents>
              <HorizontalLine></HorizontalLine>
              <Constitiuents>{context.registerd()}</Constitiuents>
            </Item>
            <Item>
              <Constitiuents>voters voted</Constitiuents>
              <HorizontalLine></HorizontalLine>
              <Constitiuents>{context.getVoted()}</Constitiuents>
            </Item>
          </React.Fragment>
        )}
      </RegionContext.Consumer>
    </HomeContainer>
  )
}
export default Home
