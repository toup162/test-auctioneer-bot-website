import React from 'react'
import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landing from './components/pages/Landing';
import WebTool from './components/pages/WebTool';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const App = () => {
    return (
        
        <div className="App">
            {/*<div className="App pl-1 sm:pl-1 md:pl-2 lg:pl-8">*/}

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />         


            <Router>
                <Switch>
                    <Route path="/web-tool">
                        <WebTool />
                    </Route>
                    <Route path="/">
                        <Landing />
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
