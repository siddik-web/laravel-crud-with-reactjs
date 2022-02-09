import React from 'react';
import ReactDOM from 'react-dom';
import {
    Switch,
    Route,
    Link,
    BrowserRouter,
    Routes
} from "react-router-dom";
import Add from './components/Add';
import Edit from './components/Edit';
import Home from './components/Home';

const App = () => {
    return (
       
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/add" element={<Add/>} />
                <Route path="/edit/:id" element={<Edit/>}/>
            </Routes>
       
    );
};

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));

