import React from 'react';
import {connect} from 'react-redux';

import wheelNumbers from './wheelNumbers';

import './style.scss';

const WheelStand = props => {
    return (
        <div className="wheel-stand">
            <div className="wheel-box">
                <div className="ball-track"></div>
            </div>
            <div className={`r-wheel ${props.rotate_wheel}`}>
                <ul>
                    {wheelNumbers.map((value, index) => {
                        return <li className={`number number-${value.number}`} key={index} style={{borderTopColor: value.color}}><span className="pit">{value.number}</span></li>
                    })}
                </ul>
                <div className="wheel-inner">
                    <div className="wheel-inner-center"></div>
                </div>
            </div>
            <div className={`r-ball ${props.rotate_ball}`}></div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        wheel_img_name: state.wheel_img_name,
        rotate_wheel: state.rotate_wheel,
        rotate_ball: state.rotate_ball,
    }
}

export default connect(mapStateToProps)(WheelStand);