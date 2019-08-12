import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div className="Logo">LOGO</div>

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">ContactUs</a>
            </li>
            <li>
              <a href="#">AboutUs</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
