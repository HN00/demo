import React, { Component } from 'react';
import {Drawer,IconButton,Divider,List, ListItem, ListItemText, ListItemIcon,Button, Grid} from "@material-ui/core";
import {Link}  from 'react-router-dom'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SvgIcon from '@material-ui/core/SvgIcon';
import './index.css'




class CustomDrawer extends Component {
  constructor() {
    super();
    this.state = {
      isOpen:""
    };
  }
  componentWillReceiveProps(nextProps){
      this.setState({
          isOpen:nextProps.isOpenDrawer
      })
  }
  _handleClickClose = () =>{
    this.setState({
        isOpen:this.props.isCloseDrawer
    })
  }

  render() {
    return (
      <Grid
        container

      >
        
          <Drawer
            variant="persistent"
            anchor="left"
            classes="drawerMenu"
            open={this.state.isOpen}
          >

            <div>
              <IconButton 
                onClick={this._handleClickClose}
                className="closeButton"
              >
                  <i class="fas fa-angle-left"></i>
              </IconButton>
            </div>
            <Divider 
              variant="middle"
            />
            <Button
              color="secondary"
              component={Link}
              to="/"
            >
              <ListItem>
                <ListItemIcon>
                  <i className="fas fa-home iconItem"></i>
                </ListItemIcon>
                <ListItemText 
                primary="Home"
                className="labelItem"
                />
              </ListItem>

            </Button>


            <Divider 
              variant="middle"
            />

          </Drawer>   
      </Grid>
    );
  }
}

export default CustomDrawer;