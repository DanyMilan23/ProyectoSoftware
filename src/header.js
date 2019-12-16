import React from "react";
import firebase from "firebase.config"
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

function submitForm(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
export default function SectionNavbars() {
  const classes = useStyles();
  
  
  return (
    <div className={classes.section}>
      <div id="navbar" className={classes.navbar}>
        <div
          className={classes.navigation}
         
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
                    onClick={submitForm}
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