import React, { useState } from "react";
import pic from "./facebook48.png";
const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    status: "Send",
  });
  const { name, email, number, message, status } = data;
  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setData({ status: "sending" });
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/jabjab/google_sheets/YMiuWzIzIbfRndSA?tabId=sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, number, message, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      if (response) {
        alert("message sent");
      } else {
        alert("failed");
      }
      setData({
        name: "",
        email: "",
        number: "",
        message: "",
        status: "Send",
      });
    } catch (err) {
      console.error();
    }
  };
  let buttonText = status;
  return (
    <form onSubmit={handleSubmit}>
      <div className="contact">
        <div id="inp">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="number">Phone Number:</label>
          <br />
          <input
            type="number"
            name="number"
            value={number}
            onChange={handleChange}
            required
          />
        </div>
        <div id="other-form">
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            name="message"
            value={message}
            onChange={handleChange}
            required
          />
          <input id="submit" type="submit" value={buttonText} />
        </div>

        <h4>
          contact person: Giorgi Tsikaradze, Phone: 555 78 78 78, Email:
          gtsikaradze@gmail.com
        </h4>

        <a href="#">
          <img src={pic} alt="Facebook"></img>
        </a>
      </div>
    </form>
  );
};

export default Contact;

/* ES6 syntax
import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "Send",
      number: "",
    };
  }
  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    } else if (field === "number") {
      this.setState({ number: event.target.value });
    }
  }
  async handleSubmit(event) {
    event.preventDefault();
    this.setState({
      status: "sending",
    });
    try {
      const response = fetch(
        "https://v1.nocodeapi.com/jabjab/google_sheets/YMiuWzIzIbfRndSA?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [
              this.state.name,
              this.state.email,
              this.state.number,
              this.state.message,
              new Date().toLocaleString(),
            ],
          ]),
        }
      );
      await (await response).json();

      if (response) {
        alert("sent");
      } else {
        alert("failed");
      }
      this.setState({
        name: "",
        email: "",
        number: "",
        message: "",
        status: "Send",
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    let buttonText = this.state.status;
    return (
      <form onSubmit={this.handleSubmit.bind(this)} method="POST">
        <div className="contact">
          <div id="inp">
            <label htmlFor="name">Name:</label>
            <br />
            <input
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleChange.bind(this)}
              required
            />
            <br />
            <label htmlFor="email">email:</label>
            <br />
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
              required
            />
            <br />
            <label htmlFor="number">number:</label>
            <br />
            <input
              type="number"
              id="number"
              value={this.state.number}
              onChange={this.handleChange.bind(this)}
              required
            />
          </div>
          <div id="other-form">
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              id="message"
              value={this.state.message}
              onChange={this.handleChange.bind(this)}
              required
            />
            <input id="submit" type="submit" value={buttonText} />
          </div>

          <h4>
            საკონტაქტო პირი: გიორგი წიქარაძე, ტელ: 555 78 78 78, Email:
            gtsikaradze@gmail.com
          </h4>
        </div>
      </form>
    );
  }
}

export default Contact;




*/
