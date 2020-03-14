import React from "react";
import "./styles.css";

export default class Header extends React.Component {

  render() {
    return (
      <div >
        <div className="header">
            <h3>Movie Explorer</h3>
            <div className="search">
              <i className="fas fa-search"></i>
              <input 
                placeholder="Search movies…"
                className="inputRoot"
                value={this.props.query}
                onChange={this.props.handleChange}
                onKeyPress={this.props.handlesubmit}
              />
            </div>
        </div>
      </div>
    );
  }
  
  }
