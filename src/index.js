import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from "./Components/Counter/Counter";
import reducer from "./redux/reducer";
import * as actions from './redux/actions/actionsCreators';
import {createStore,bindActionCreators} from 'redux'
const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const {dispatch,subscribe,getState} =store;
const {inc,dec,rnd} = bindActionCreators(actions,dispatch);


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Counter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
