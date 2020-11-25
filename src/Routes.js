import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Pages from './Pages'

const Routes = () => {
    return(
        <div>
            <Switch>
                <Route exact path='/magic-cards' component={Pages.MagicCards}></Route>
            </Switch>
        </div>
    )
}

export default Routes