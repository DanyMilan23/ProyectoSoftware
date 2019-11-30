import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";
//components
import Header from'header'
import Main from 'menu_principal'
import HotNews from 'HotNews';


class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>

                <Switch>
                    <Route exact path='/slider' component={Header}/> 
                    <Route exact path='/' component={Main}/> 
                </Switch>
            </BrowserRouter>
             
        );
    }
}
export default Router;
