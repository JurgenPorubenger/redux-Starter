import React from 'react';
// import store from "../redux/index";
import {inc,dec,rnd} from '../redux/actions/actionsCreators';
import {createStore} from 'redux'
import reducer from "../redux/reducer";
const store = createStore(reducer);


export default function Button(props) {

    const clickHandler = (e,action)=>{
        store.subscribe(()=>console.log(store.getState()));
        return store.dispatch(action)
    };
    return(
        <button className={`btn-${props.name}`}
                onClick={(e)=>{
                    switch (props.name) {
                        case 'INC': return  clickHandler(e,inc());
                        case 'DEC': return  clickHandler(e,dec());
                        case 'RND': return  clickHandler(e,rnd(Math.floor(Math.random()*10)));
                        default: return clickHandler(e,{});
                    }
                    }
                }>
            {props.name}
        </button>
    )
}