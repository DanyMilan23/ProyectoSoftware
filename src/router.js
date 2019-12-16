import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";
//components
import Header from'header'
import Main from 'menu_principal'
import HotNews from 'views/Components/Components';


class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>

                <Switch>
                    <Route exact path='/slider' component={HotNews}/> 
                    <Route exact path='/' component={Main}/> 
                </Switch>
            </BrowserRouter>
             
        );
    }
}
export default Router;
