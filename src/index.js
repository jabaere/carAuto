import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Contact from "./Contact";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "ავტო იმპორტი ამერიკიდან",
      price: "",
      about: "",
      contact: "",
    };
    this.btnClickPrice = this.btnClickPrice.bind(this);
    this.btnClickAbout = this.btnClickAbout.bind(this);
    this.btnClickContact = this.btnClickContact.bind(this);
    this.btnClickHome = this.btnClickHome.bind(this);
  }
  btnClickPrice() {
    this.setState({
      header: "",
      price: <Price />,
      about: "",
      contact: "",
    });
  }
  btnClickAbout() {
    this.setState({
      header: "",
      price: "",
      about: <About />,
      contact: "",
    });
  }
  btnClickContact() {
    this.setState({
      header: "",
      price: "",
      about: "",
      contact: <Contact />,
    });
  }
  btnClickHome() {
    this.setState({
      header: "ავტო იმპორტი ამერიკიდან",
      price: "",
      about: "",
      contact: "",
    });
  }
  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="buttons" onClick={this.btnClickHome}>
            Home
          </div>
          <div className="buttons" onClick={this.btnClickPrice}>
            Price
          </div>
          <div className="buttons" onClick={this.btnClickAbout}>
            About
          </div>
          <div className="buttons" onClick={this.btnClickContact}>
            Contact
          </div>
        </div>
        <h3 id="title">{this.state.header}</h3>
        <div className="body">
          {this.state.price}
          {this.state.about}
          {this.state.contact}
        </div>
      </div>
    );
  }
}

class Price extends React.Component {
  render() {
    const cities = [
      { name: "Alabama", price: "1080$", id: 1 },
      { name: "Alaska", price: "1000$", id: 2 },
      { name: "Arizona", price: "1000$", id: 3 },
      { name: "Arkansas", price: "900$", id: 4 },
      { name: "California", price: "800$", id: 5 },
      { name: "Colorado", price: "600$", id: 6 },
      { name: "Connecticut", price: "900$", id: 7 },
      { name: "Delaware", price: "1000$", id: 8 },
      { name: "Florida", price: "1200$", id: 9 },
      { name: "Georgia", price: "1500$", id: 10 },
      { name: "Hawaii", price: "1700$", id: 11 },
      { name: "Idaho", price: "1300$", id: 12 },
      { name: "Illinois", price: "1000$", id: 13 },
      { name: "Indiana", price: "1000$", id: 14 },
      { name: "Iowa", price: "1000$", id: 15 },
      { name: "Kansas", price: "1000$", id: 16 },
      { name: "Kentucky", price: "1300$", id: 17 },
      { name: "Louisiana", price: "1400$", id: 18 },
      { name: "Maine", price: "1150$", id: 19 },
      { name: "Maryland", price: "1250$", id: 20 },
      { name: "Massachusetts", price: "1050$", id: 21 },
      { name: "Michigan", price: "1100$", id: 22 },
      { name: "Minnesota", price: "1000$", id: 23 },
      { name: "Mississippi", price: "900$", id: 24 },
      { name: "Missouri", price: "800$", id: 25 },
      { name: "Montana", price: "900$", id: 26 },
      { name: "Nebraska", price: "1000$", id: 27 },
      { name: "Nevada", price: "1400$", id: 28 },
      { name: "New Hampshire", price: "1000$", id: 29 },
      { name: "New Jersey", price: "800$", id: 30 },
      { name: "New Mexico", price: "700$", id: 31 },
      { name: "New York", price: "1000$", id: 32 },
      { name: "North Carolina", price: "1200$", id: 33 },
      { name: "North Dakota", price: "1000$", id: 34 },
      { name: "Ohio", price: "1350$", id: 35 },
      { name: "Oklahoma", price: "1450$", id: 36 },
      { name: "Oregon", price: "1550$", id: 37 },
      { name: "Pennsylvania", price: "1500$", id: 38 },
      { name: "Rhode Island", price: "1600$", id: 39 },
      { name: "South Carolina", price: "1400$", id: 40 },
      { name: "South Dakota", price: "1300$", id: 41 },
      { name: "Tennessee", price: "1000$", id: 42 },
      { name: "Texas", price: "1200$", id: 43 },
      { name: "Utah", price: "1000$", id: 44 },
      { name: "Vermont", price: "1000$", id: 45 },
      { name: "Virginia", price: "1000$", id: 46 },
      { name: "Washington", price: "900$", id: 47 },
      { name: "West Virginia", price: "800$", id: 48 },
      { name: "Wisconsin", price: "400$", id: 49 },
      { name: "Wyoming", price: "400$", id: 50 },
    ];

    return (
      <div id="cities">
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cities.map(
              (city) => (
                <tr key={city.id}>
                  <td key={city.name}>{city.name}</td>
                  <td key={city.price}>{city.price}</td>
                </tr>
              )

              //<p id = 'city' key ='city.name'>{city.name} :- {city.price}</p>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <h1 id="name">About Us</h1>
        <p className="p-about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
