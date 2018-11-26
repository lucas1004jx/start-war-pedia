import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import PeoplePage from '../js_components/peoplePage';
import PlanetsPage from '../js_components/planetsPage';

const Routes=()=>(
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={PeoplePage}/>
    <Route path="/people" exact component={PeoplePage}/>
    <Route path="/planets" exact component={PlanetsPage}/>
    </Switch>
    </BrowserRouter>
)

export default Routes;