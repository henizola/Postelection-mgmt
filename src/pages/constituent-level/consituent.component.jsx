import React from "react"
import Form from "../../components/Form/form.component"

import CustomButton from "../../components/custom-button/custom-button.component"
import { RegionContext } from "../../context/regional-context/regional-context.context"
import {
  ConstContainer,
  ProgressBar,
  BalotRegstration,
} from "./consituent.styles"
class ConstituentLevel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      unused: "",
      wasted: "",
      votes: "",
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    console.log(this.props.history.location.pathname)
    return (
      <RegionContext.Consumer>
        {context => (
          <div>
            <ProgressBar></ProgressBar>

            <ConstContainer>
              {this.props.history.location.pathname ===
              "/constituent/unused-ballots" ? (
                <form
                  onSubmit={event => {
                    event.preventDefault()
                    this.props.history.push("/")
                    context.addData(
                      this.state.unused,
                      this.state.votes,
                      this.state.wasted
                    )
                  }}
                >
                  <BalotRegstration>
                    <Form
                      name="unused"
                      value={this.state.unused}
                      label="Unused Ballot nummber"
                      type="text"
                      required
                      handleChange={this.handleChange}
                    />
                  </BalotRegstration>

                  <BalotRegstration>
                    <Form
                      name="wasted"
                      value={this.state.wasted}
                      label="wasted ballot number"
                      type="text"
                      required
                      handleChange={this.handleChange}
                    />
                  </BalotRegstration>
                  <BalotRegstration>
                    <Form
                      name="votes"
                      value={this.state.votes}
                      label="wasted ballot number"
                      type="text"
                      required
                      handleChange={this.handleChange}
                    />
                    <CustomButton>Next</CustomButton>
                  </BalotRegstration>
                </form>
              ) : (
                <div></div>
              )}
            </ConstContainer>
          </div>
        )}
      </RegionContext.Consumer>
    )
  }
}
export default ConstituentLevel
