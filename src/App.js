import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bio from './Bio';
import Home from './Home';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/Bio" component={Bio} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;