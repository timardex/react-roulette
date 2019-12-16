import React from 'react';
import {connect} from 'react-redux';

const WheelStand = props => {

    return (
        <div className="wheel-stand">
            <div className="wheel-box">
                <div className="ball-track"></div>
            </div>
            <img src={require(`../../assets/images/wheel/w${props.wheel_img_name}.png`)} className={"img-fluid r-wheel " + props.rotate_wheel} alt="Roulette Wheel"/>
            <div className={"r-ball " + props.rotate_ball}></div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        wheel_img_name: state.wheel_img_name,
        rotate_wheel: state.rotate_wheel,
        rotate_ball: state.rotate_ball,
        wheel_numbers: state.wheel_numbers
    }
}

export default connect(mapStateToProps)(WheelStand);