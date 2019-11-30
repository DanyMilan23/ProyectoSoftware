import React from 'react'
//Material kit
// material-ui components
import { withStyles } from "@material-ui/core/styles";
// core components
import Header from 'components/Header/Header.js'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";
import Tooltip from "@material-ui/core/Tooltip";
import profileImage from "assets/img/faces/avatar.jpg";
import { container, title } from "assets/jss/material-kit-react.js";
import { defaultFont } from "assets/jss/material-kit-react.js";
//images

class prueba extends React.Component{
    render(){
        return(
            <div className={this.props.classes.pageHeader}>
                <Header               
                brand="Ecommerce"
                color="rose"
                rightLinks={
                    <List className={this.props.classes.list}>
                        <ListItem className={this.props.classes.listItem}>
                            <Button
                            href="#DateTime"
                            className={this.props.classes.navLink}
                            color="transparent"
                            >
                                Fecha
                            </Button>
                        </ListItem>
                        <ListItem className={this.props.classes.listItem}>
                            <Tooltip
                                id="tooltip-bottom"
                                title="Tooltip on bottom"
                                placement="bottom"
                                classes={this.props.classes.tooltip }
                            >
                                <img
                                    src={profileImage}
                                    className={this.props.classes.img}
                                    alt="profile"
                                />
                            </Tooltip>
                        </ListItem>  
                    </List>
                    }
                />
            </div>
        );
    }
}
export default withStyles({
    pageHeader:{
      zIndex:'1000'
    },
    section: {
        padding: "70px 0",
        paddingTop: "0"
      },
      container,
      title: {
        ...title,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
      },
      navbar: {
        zIndex: "100",
        position: "relative",
        overflow: "hidden",
        "& header": {
          borderRadius: "0"
        }
      },
      navigation: {
        backgroundPosition: "center center",
        backgroundSize: "cover",
        marginTop: "0",
        minHeight: "740px"
      },
      formControl: {
        margin: "0 !important",
        paddingTop: "0"
      },
      inputRootCustomClasses: {
        margin: "0!important"
      },
      searchIcon: {
        width: "20px",
        height: "20px",
        color: "inherit"
      },
      img: {
        width: "40px",
        height: "40px",
        borderRadius: "50%"

      },
      imageDropdownButton: {
        padding: "0px",
        top: "4px",
        borderRadius: "50%",
        marginLeft: "5px"
      },
      tooltip: {
        padding: "10px 15px",
        minWidth: "130px",
        color: "#555555",
        lineHeight: "1.7em",
        background: "#FFFFFF",
        border: "none",
        borderRadius: "3px",
        boxShadow:
          "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
        maxWidth: "200px",
        textAlign: "center",
        fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
        fontSize: "0.875em",
        fontStyle: "normal",
        fontWeight: "400",
        textShadow: "none",
        textTransform: "none",
        letterSpacing: "normal",
        wordBreak: "normal",
        wordSpacing: "normal",
        wordWrap: "normal",
        whiteSpace: "normal",
        lineBreak: "auto"
      },
      list: {
        ...defaultFont,
        fontSize: "14px",
        margin: 0,
        paddingLeft: "0",
        listStyle: "none",
        paddingTop: "0",
        paddingBottom: "0",
        color: "inherit"
      },
      listItem: {
        float: "left",
        color: "inherit",
        position: "relative",
        display: "block",
        width: "auto",
        margin: "0",
        padding: "0",
        
      }
})(prueba);