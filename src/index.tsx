import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ClickCounter } from "components/ClickCounter";
import { HelloWorld } from "components/HelloWorld";

class App extends Component {
    state = {
        name: 'OTUS',
    }
    render() {
        const { name } = this.state;
        return (
            <>
                <HelloWorld name={name}/>
                <ClickCounter start={1} />
            </>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));