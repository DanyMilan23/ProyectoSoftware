import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
// @material-ui/icons
import Search from "@material-ui/icons/Search";
// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import Logo from"assets/img/logo4.png";
import image from "assets/img/profile-bg.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionNavbars() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div id="navbar" className={classes.navbar}>
        <div
          className={classes.navigation}
          style={{ backgroundImage: "url(" + image + ")" }}
        >
          <Header
            color="white"         
            fixed
            changeColorOnScroll={{
              height: 200,
              color: "white"
            }}
            leftLinks={
              <img src={Logo}
              style={{width:"100px"}}></img>
            }
            rightLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Button
                    color="transparent"
                    className={
                      classes.navLink + " " + classes.socialIconsButton
                    }
                  >
                    <AddShoppingCartTwoToneIcon/>
                    {" "}
                    Carrito
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    color="transparent"
                    className={
                      classes.navLink + " " + classes.socialIconsButton
                    }
                  >
                    <PersonOutlineTwoToneIcon/>
                    {" "}
                    Iniciar Sesion
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  
                  <Button justIcon round color="white">
                  <Search className={classes.searchIcon} />
                  
                </Button>
                </ListItem>
              </List>
            }
          />
        </div>
      </div>
    </div>
  );
}