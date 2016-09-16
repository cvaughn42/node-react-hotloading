import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from "react-redux";
import {bar} from './other';

class Main extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        var tweets = this.props.tweets.map((val) => {
            return <li>{val}</li>
        });
        return (
            <div>
                <h1>{this.props.user}'s tweets: 
                    <ul>{tweets}</ul>
                </h1>
            </div>
        );
    }
}
Main = connect((state) => {
    return {
        user: state.user,
        tweets: state.tweets,
    };
})(Main);

function reducer(state = {
    user: 'Bill',
    tweets: ['I like cats.', 'Also food.']
}, action) {
    return state;
}

const store = createStore(reducer);

const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    app
);