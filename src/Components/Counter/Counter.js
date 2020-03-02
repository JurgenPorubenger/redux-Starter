import React from 'react';
import './index.scss'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/actions/actionsCreators'

const Counter =({counter,inc,dec,rnd}) => {
    return(
        <div className="main">
            <h2 id="counter">{counter}</h2>
            <div>
                <button onClick={inc} className="inc">inc</button>
                <button onClick={dec} className="dec">dec</button>
                <button onClick={rnd} className="rnd">rnd</button>
            </div>
        </div>
    )
};
const mapStateToProps = (state) => {
    return {counter: state}
};
const mapDispatchToProps = (dispatch) => {
    const{inc,dec,rnd} = bindActionCreators(actions,dispatch);
    return {
        inc,
        dec,
        rnd
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
