import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

import axios from "axios"

export default class SubscribeFormRes extends React.Component {
  state = {
    email: "",
    message: "",
    disabledSubmit: false,
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ disabledSubmit: true })
    //console.log("sending state email: ", this.state.email)
    const result = await addToMailchimp(this.state.email)
    axios({
      method: "post",
      url: "/api/mailchimp/addToGroup",
      data: { subscriber_email: this.state.email, interestID: "23ba42f58b" },
    })
      .then(r => {
        //console.log("Result - ", r)
      })
      .catch(r => {
        console.log("catch - ", r)
      })
    this.setState({ message: result.msg, disabledSubmit: false })
  }
  render() {
    return (
      <div className="mc_embed_signup res">
        <form
          name="subscribeForm"
          method="POST"
          id="subscribe-form"
          className="subscribe-form"
          onSubmit={this.handleSubmit}
        >
          <div className="form-row d-flex flex-column justify-content-center align-items-center">
            <input
              id="mce-EMAIL"
              className="subscribe-email flex-grow-1 mb-50"
              type="email"
              name="email"
              placeholder="Enter your email address"
              aria-label="Enter your email address to subscribe for Sandbox Solana updates"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <button
              disabled={this.state.disabledSubmit}
              className="btn btn-blue font-com font-20"
              type="submit"
            >
              JOIN THE INTEREST LIST
            </button>
          </div>
        </form>
        <div
          className="message"
          dangerouslySetInnerHTML={{ __html: this.state.message }}
        />
      </div>
    )
  }
}
