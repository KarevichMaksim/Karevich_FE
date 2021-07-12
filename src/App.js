import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Dashboard} from "./components/Dashboard/Dashboard";
import {LoginPage} from "./components/Login/Login";

import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={LoginPage}/>
                <Route path="/dashboard" component={Dashboard}/>
            </Switch>
        </Router>
    );
}

export default App;
