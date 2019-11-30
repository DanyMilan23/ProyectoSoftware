//firebase
import firebase from "firebase.config"
import React,{Component} from "react";
// @material-ui/core components
import Carousel from "react-slick";
import LocationOn from "@material-ui/icons/LocationOn";
import {withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Header from'header'
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";
import { container } from "assets/jss/material-kit-react.js";
//Jss
import styles from "assets/jss/material-kit-react/views/loginPage.js";
//imagenes
//router
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };

class menu_principal extends React.Component{
    constructor(props){ 
        super(props);
        this.state={
            query:'',
            picture:''      
        };
    }
    render(){
        return(
           <React.Fragment>
            <div >
                <Header/>
                <div className={this.props.classes.section}>
                    <div className={this.props.classes.container}>
                        <GridContainer>
                        <GridItem xs={12} sm={12} md={8} className={this.props.classes.marginAuto}>
                            <Card carousel>
                            <Carousel {...settings}>
                                <div>
                                <img src={image1} alt="First slide" className="slick-image" />
                                <div className="slick-caption">
                                    <h4>
                                    <LocationOn className="slick-icons" />
                                    Yellowstone National Park, United States
                                    </h4>
                                </div>
                                </div>
                                <div>
                                <img
                                    src={image2}
                                    alt="Second slide"
                                    className="slick-image"
                                />
                                <div className="slick-caption">
                                    <h4>
                                    <LocationOn className="slick-icons" />
                                    Somewhere Beyond, United States
                                    </h4>
                                </div>
                                </div>
                                <div>
                                <img src={image3} alt="Third slide" className="slick-image" />
                                <div className="slick-caption">
                                    <h4>
                                    <LocationOn className="slick-icons" />
                                    Yellowstone National Park, United States
                                    </h4>
                                </div>
                                </div>
                            </Carousel>
                            </Card>
                        </GridItem>
                        </GridContainer>
                </div>
            </div>
        </div>
        </React.Fragment>
        );
    }
 
}
export default withStyles({
    section: {
        padding: "70px 0"
      },
      container,
      marginAuto: {
        marginLeft: "auto !important",
        marginRight: "auto !important"
      }
})(menu_principal);
