// import {createStore} from 'redux'

const reducer = (state = 15, action) => {
    switch (action.type) {
        case 'INC':
            return state+1;
        case 'DEC':
            return state-1;
        case 'RND':
            return state+action.payload;
        default:
            return state;
    }
};

export default reducer;
// const store = createStore(reducer);
// console.log(store.getState());
// // store.dispatch({type:'INC'});
// // store.dispatch({type:'INC'});
// // store.dispatch({type:'INC'});
// console.log(store.getState());
// store.subscribe(()=>console.log(store.getState()));
// export default store;
