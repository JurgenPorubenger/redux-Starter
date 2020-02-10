import React from 'react';
import style from './index.scss'

const Counter =() => {
    return(
        <div className={style.main}>
            <h2 id={style.counter}>0</h2>
            <button className={style.inc}>inc</button>
            <button className={style.dec}>dec</button>
            <button className={style.rnd}>rnd</button>
        </div>
    )
};
export default Counter;