import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Pages from './Pages'

const Routes = () => {
    return(
        <div>
            <Switch>
                <Route exact path='/sets' component={Pages.Sets}></Route>
                <Route path="/sets/:setname" component={Pages.Sets}></Route>
                <Route path="sets/:setname/:cardname" component={Pages.Sets}></Route>
                <Route path="/" component={Pages.Search}></Route>
                <Route path="search" component={Pages.Search}></Route>
                <Route path="search/:cardname" component={Pages.Search}/>
            </Switch>
        </div>
    )
}

export default Routes