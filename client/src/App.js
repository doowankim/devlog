import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from "./Layout/Footer";
import Navbar from "./Layout/Navbar";
import Landing from "./Layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Writing from "./components/write/writing";
import ReadBBS from "./components/readBBS/ReadBBS";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <div className="container">
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/writing" component={Writing} />
                        <Route exact path="/readBBS" component={ReadBBS} />
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;