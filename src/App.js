import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Dashboard} from "./components/Dashboard/Dashboard";
import {Login} from "./components/Login/Login";

import './App.css';

function App() {
    return (
        <Router>

            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
            </Switch>
        </Router>
    );
}

export default App;
