import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";
//components
import Header from'header'
import Slider from'views/Components/Sections/SectionCarousel'


class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path='/slider' component={Slider}/> 
                </Switch>
            </BrowserRouter>
             
        );
    }
}
export default Router;
