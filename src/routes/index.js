import React from 'react';
import {BrowserRouter, Route,Switch,Redirect} from 'react-router-dom';
import {People,Planets ,Species ,Starships ,Vehicles ,Films } from './category';
import PeopleDetail from '../js_components/peopleDetail';
import Header from '../js_components/header';

const Routes=()=>(
    <BrowserRouter>
    <React.Fragment>
    <Header/>
    <Switch>
    <Redirect exact from="/" to="/people" component={People} />
    <Route path="/people" exact component={People}/>
    <Route path="/people/:id" exact component={PeopleDetail}/>
    <Route path="/planets" exact component={Planets}/>
    <Route path="/starships" exact component={Starships}/>
    <Route path="/species" exact component={Species}/>
    <Route path="/vehicles" exact component={Vehicles}/>
    <Route path="/films" exact component={Films}/>
    </Switch>
    </React.Fragment>
    </BrowserRouter>
)

export default Routes;