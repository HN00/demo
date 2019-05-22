import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Menu,MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

class AccountButton extends Component{
    constructor(props){
        super(props);
        this.state={
            isAccountOpen:false,
            anchorEl: null,
        }
    }
    _handleClickOpen = event =>{
        this.setState({
            isAccountOpen:true,
            anchorEl: event.currentTarget
        })
        console.log(this.state.isAccountOpen)
    }
    _handleClose = () => {
        this.setState({ 
            isAccountOpen: null,
            anchorEl: null
        
        });
      };

    render(){
        return(
            <div >
                <IconButton
                  aria-owns={this.state.isAccountOpen ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this._handleClickOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  anchorEl={this.state.anchorEl}
                  open={this.state.isAccountOpen}
                  onClose={this._handleClose}
                >
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>My account</MenuItem>
                </Menu>
            </div>
        );
    }
}
export default AccountButton;