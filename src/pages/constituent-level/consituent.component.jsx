import React from "react"
import Form from "../../components/Form/form.component"
import "./consituent.styles.scss"
import CustomButton from "../../components/custom-button/custom-button.component"
import { RegionContext } from "../../context/regional-context/regional-context.context"
class ConstituentLevel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      unused: "",
      wasted: "",
      votes: "",
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    console.log(this.props.history.location.pathname)
    return (
      <RegionContext.Consumer>
        {(context) => (
          <div className="const-container">
            <hr className="progress-bar"></hr>
            <div className="balot-regstration">
              {this.props.history.location.pathname ===
              "/constituent/unused-ballots" ? (
                <form
                  onSubmit={(event) => {
                    event.preventDefault()
                    this.props.history.push("/region/Constitiuents")
                    context.addData(
                      this.state.unused,
                      this.state.votes,
                      this.state.wasted
                    )
                  }}
                >
                  <h3>provide the first number of unused ballots</h3>
                  <Form
                    name="unused"
                    value={this.state.unused}
                    label="Unused Ballot nummber"
                    type="text"
                    required
                    handleChange={this.handleChange}
                  />
                  <Form
                    name="wasted"
                    value={this.state.wasted}
                    label="wasted ballot number"
                    type="text"
                    required
                    handleChange={this.handleChange}
                  />
                  <Form
                    name="votes"
                    value={this.state.votes}
                    label="wasted ballot number"
                    type="text"
                    required
                    handleChange={this.handleChange}
                  />
                  <CustomButton>Next</CustomButton>
                </form>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        )}
      </RegionContext.Consumer>
    )
  }
}
export default ConstituentLevel
