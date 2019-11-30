import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";
//components
import Header from'header'
import News from 'HotNews'
import HotNews from 'HotNews';


class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Header/>
                <HotNews/>
                <Switch>
                    <Route exact path='/' component={News}/> 
                    <Route exact path='/slider' component={Header}/> 
                </Switch>
            </BrowserRouter>
             
        );
    }
}
export default Router;
