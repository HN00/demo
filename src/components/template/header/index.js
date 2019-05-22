import React, { Component } from 'react';
import {AppBar,Toolbar,IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountButton from './accountButton/index'
import CustomDrawer from './customDrawer/index'
import Grid from '@material-ui/core/Grid';
import './index.css'


class Header extends Component {
  constructor() {
    super();
    this.state = {
      isProcessing:false,
    };
  }
  _handleClickIconButton = (side,open) => {
    this.setState({
      isProcessing:true
    })
  }

  render() {
    return (
      <Grid container>
            <AppBar 
              position="fixed" 
              color="secondary"
              
            >
              <Toolbar>
                <IconButton
                  aria-label="Menu"
                  className="buttonMenu"
                  onClick={this._handleClickIconButton}
                >
                  <MenuIcon/>
                </IconButton>
                <Typography 
                  variant="h5" 
                  color="textSecondary"
                  className="titleHeader"
                >
                  Admin Template
                </Typography>
                <AccountButton />
              </Toolbar>
            </AppBar>
          
        <CustomDrawer
          isOpenDrawer={this.state.isProcessing}
          isCloseDrawer={!this.state.isProcessing}
        />
    </Grid>

    );
  }
}


export default Header;