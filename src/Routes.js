import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Pages from './Pages'

const Routes = () => {
    return(
        <div>
            <Switch>
                <Route path="/" component={Pages.Sets}></Route>
                <Route path='/sets' component={Pages.Sets}></Route>
                <Route path="/sets/:setname" component={Pages.Sets}></Route>
                <Route exact path="sets/:setname/:cardname" component={Pages.Sets}></Route>
            </Switch>
        </div>
    )
}

export default Routes