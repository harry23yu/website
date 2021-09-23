import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bio from './Bio';
import Home from './Home';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/bio" component={Bio} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;