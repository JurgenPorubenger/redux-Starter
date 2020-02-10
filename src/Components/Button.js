import React from 'react';
// import store from "../redux/index";
import {inc,dec,rnd} from '../redux/actions/actionsCreators';
import {createStore} from 'redux'
import reducer from "../redux/reducer";
const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const {dispatch,subscribe,getState} =store;

export default function Button(props) {
    const bindActionCreator = (creator,dispatch)=>(...args)=>dispatch(creator(...args));
    const incDispatch = bindActionCreator(inc,dispatch);
    const decDispatch = bindActionCreator(dec,dispatch);
    const rndDispatch = bindActionCreator(rnd,dispatch);
    const clickHandler = (e,action,args)=>{
        subscribe(()=>console.log(getState()));
        return action(args)
    };
    return(
        <button className={`btn-${props.name}`}
                onClick={(e)=>{
                    switch (props.name) {
                        case 'INC': return  clickHandler(e,incDispatch);
                        case 'DEC': return  clickHandler(e,decDispatch);
                        case 'RND': return  clickHandler(e,rndDispatch,Math.floor(Math.random()*10));
                        default: return clickHandler(e,{});
                    }
                    }
                }>
            {props.name}
        </button>
    )
}