import React from 'react';
import {BrowserRouter, Route,Switch,Redirect} from 'react-router-dom';
import {People,Planets ,Species ,Starships ,Vehicles ,Films } from './category';
import PeopleDetail from '../js_components/peopleDetail';
import PlanetDetail from '../js_components/planetDetail';
import FilmDetail from '../js_components/filmDetail';
import SpecieDetail from '../js_components/specieDetail';
import VehicleDetail from '../js_components/vehicleDetail';
import StarshipDetail from '../js_components/starshipDetail';
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
    <Route path="/planets/:id" exact component={PlanetDetail}/>
    <Route path="/starships" exact component={Starships}/>
    <Route path="/starships/:id" exact component={StarshipDetail}/>
    <Route path="/species" exact component={Species}/>
    <Route path="/species/:id" exact component={SpecieDetail}/>
    <Route path="/vehicles" exact component={Vehicles}/>
    <Route path="/vehicles/:id" exact component={VehicleDetail}/>
    <Route path="/films" exact component={Films}/>
    <Route path="/films/:id" exact component={FilmDetail}/>
    </Switch>
    </React.Fragment>
    </BrowserRouter>
)

export default Routes;