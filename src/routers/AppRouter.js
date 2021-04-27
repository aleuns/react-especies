import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { BottomFooter } from '../components/ui/BottomFooter';

import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { Gallery } from '../pages/Gallery';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/gallery" component={Gallery} />
                    <Route exact path="/" component={Home} />        
                </Switch>
                <BottomFooter />
            </div>
        </Router>
    )
}

