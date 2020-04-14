
import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
    
    render() {
        return (
            <h1>OTUS forever</h1>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));