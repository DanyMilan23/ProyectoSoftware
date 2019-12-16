//firebase
import firebase from "firebase.config"
import React,{Component} from "react";
// @material-ui/core components
import Carousel from "react-slick";
import LocationOn from "@material-ui/icons/LocationOn";
import {withStyles } from "@material-ui/core/styles";
import Slider from "views/Components/Sections/SectionCarousel"
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Header from'header'
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";
import { container } from "assets/jss/material-kit-react.js";
//Jss
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
                <div className={this.props.classes.container} >
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../../../assets/img/bg2.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../../../assets/img/bg3.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../../../assets/img/bg.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
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
      container:{
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%",
        "@media (min-width: 576px)": {
            maxWidth: "540px"
          },
          "@media (min-width: 768px)": {
            maxWidth: "720px"
          },
          "@media (min-width: 992px)": {
            maxWidth: "960px"
          },
          "@media (min-width: 1200px)": {
            maxWidth: "1140px"
          }
      },
      marginAuto: {
        marginLeft: "auto !important",
        marginRight: "auto !important"
      }
      
})(menu_principal);
