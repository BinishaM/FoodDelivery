import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Topnav from "./containers/Topnav/Topnav";
import Login from "./views/Login/Login";
import './assets/css/variables.css'
import './assets/css/theme.css';
import './assets/css/page.css';
import Home from './Pages/Home';
import Fooditems from "./Pages/Fooditems";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Welcome from "./views/Welcome/Welcome";
import axios from 'axios';
import Component from 'component';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meal: ""
        }
    }

    componentDidMount() {
        const URL = 'https://developers.zomato.com/api/v2.1/cuisines';
        axios.get(URL)
            .then(res => {
                const meal = res.data.meals; //Taking just the required data
                if (typeof meal === 'object') {
                    this.setState({meal});// setting it to state of our app
                }
            })
            .catch(error => {
                console.log(error);
            });
    }


    render() {
        var data = this.state.meal;
        return (

            <main>
                <div className="App">
                    {data.length > 0 && <Home meals={data} />}
                </div>
                <Topnav/>
                <div className="wrapper">
                    <switch>
                        <Route exact path="/" Component={Welcome}/>
                        {<Route exact path="/Home/" Component={Home}/>}
                        {<Route exact path="/Login/" Component={Login}/>}
                        {<Route exact path="/About/" Component={About}/>}
                        {<Route exact path="/Fooditems/" Component={Fooditems}/>}
                        {<Route exact path="/Contacts/" Component={Contacts}/>}


                    </switch>
                </div>
            </main>
        );
    }
}
export default App;
