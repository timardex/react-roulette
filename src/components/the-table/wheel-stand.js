import React from 'react';
import {connect} from 'react-redux';

const WheelStand = props => {
    const wheel_numbers =
    [
        {
            number: 0,
            color:  'green'
        },
        {
            number: 32,
            color: 'red'
        },
        {
            number: 15,
            color: 'black'
        },
        {
            number: 19,
            color:  'red'
        },
        {
            number: 4,
            color: 'black'
        },
        {
            number: 21,
            color:  'red'
        },
        {
            number: 2,
            color: 'black'
        },
        {
            number: 25,
            color:  'red'
        },
        {
            number: 17,
            color: 'black'
        },
        {
            number: 34,
            color:  'red'
        },
        {
            number: 6,
            color: 'black'
        },
        {
            number: 27,
            color:  'red'
        },
        {
            number: 13,
            color: 'black'
        },
        {
            number: 36,
            color:  'red'
        },
        {
            number: 11,
            color: 'black'
        },
        {
            number: 30,
            color:  'red'
        },
        {
            number: 8,
            color: 'black'
        },
        {
            number: 23,
            color:  'red'
        },
        {
            number: 10,
            color: 'black'
        },
        {
            number: 5,
            color:  'red'
        },
        {
            number: 24,
            color: 'black'
        },
        {
            number: 16,
            color:  'red'
        },
        {
            number: 33,
            color: 'black'
        },
        {
            number: 1,
            color:  'red'
        },
        {
            number: 20,
            color: 'black'
        },
        {
            number: 14,
            color:  'red'
        },
        {
            number: 31,
            color: 'black'
        },
        {
            number: 9,
            color:  'red'
        },
        {
            number: 22,
            color: 'black'
        },
        {
            number: 18,
            color:  'red'
        },
        {
            number: 29,
            color: 'black'
        },
        {
            number: 7,
            color:  'red'
        },
        {
            number: 28,
            color: 'black'
        },
        {
            number: 12,
            color:  'red'
        },
        {
            number: 35,
            color: 'black'
        },
        {
            number: 3,
            color:  'red'
        },
        {
            number: 26,
            color: 'black'
        },
    ]

    return (
        <div className="wheel-stand">
            <div className="wheel-box">
                <div className="ball-track"></div>
            </div>
            <div className={`r-wheel ${props.rotate_wheel}`}>
                <ul>
                    {wheel_numbers.map((value, index) => {
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