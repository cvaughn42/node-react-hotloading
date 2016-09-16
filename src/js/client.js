import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from "react-redux";


function doWhatever() {
    return {type: 'whatever'};
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.dispatch(doWhatever());
    }

    render() {
        var tweets = this.props.tweets.map((val) => {
            return <li>{val}</li>
        });
        return (
            <div>
                <h1 onClick={this.handleClick}>{this.props.user}'s tweets: 
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
    }
})(Main);

var initState = {
    user: 'Bill',
    tweets: ['I like cats.', 'Also food.']
};
const store = createStore(function (state = initState, action) {
    if (action.type === 'whatever') {
        var newState = Object.assign({}, state, {user: 'Ram'});
        //console.log('newstate', newState);
        //return {user: 'Ram', tweets: ['nothing']}; 
        return newState;
    }
    return state;
});

const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    app
);