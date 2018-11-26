import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import PeoplePage from '../js_components/peoplePage';
import PlanetsPage from '../js_components/planetsPage';
import SpeciesPage from '../js_components/speciesPage';
import StarshipsPage from '../js_components/starshipsPage';
import VehiclesPage from '../js_components/vehiclesPage';
import FilmsPage from '../js_components/filmsPage';

const Routes=()=>(
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={PeoplePage}/>
    <Route path="/people" exact component={PeoplePage}/>
    <Route path="/planets" exact component={PlanetsPage}/>
    <Route path="/starships" exact component={StarshipsPage}/>
    <Route path="/species" exact component={SpeciesPage}/>
    <Route path="/vehicles" exact component={VehiclesPage}/>
    <Route path="/films" exact component={FilmsPage}/>
    </Switch>
    </BrowserRouter>
)

export default Routes;