import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Menu from "@material-ui/core/Menu";
import "./Header.css";

export default class PrimarySearchAppBar extends React.Component {

  render() {
    return (
      <div >
        <AppBar position="fixed">
          <Toolbar className="header">
            <Typography variant="h6" noWrap>
              Movie Explorer
            </Typography>
            <div className="search">
              <InputBase
                placeholder="Search movies  …"
                className="inputRoot"
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div  />
          </Toolbar>
        </AppBar>
        <Menu id="primary-search-account-menu" keepMounted open={false}></Menu>
      </div>
    );
  }
  
  }
