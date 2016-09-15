import React from 'react';
import ReactDOM from 'react-dom';
import {bar} from './other';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: bar() 
        };
    }

    render() {
        var val = this.state.foo;
        return (
            <div>
                <h1>This {val} is not a very cool app!</h1>
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);