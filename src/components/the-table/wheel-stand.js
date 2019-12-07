import React from 'react';
import {connect} from 'react-redux';

const WheelStand = props => {

    return (
        <div className="wheel-stand">
            <img src={require('../../assets/images/wheel-stand.png')} className="img-fluid" alt="Wheel stand"/>
            <img src={require(`../../assets/images/wheel/w${props.wheel_img_name}.png`)} className={"img-fluid r-wheel " + props.rotate_wheel} alt="Roulette Wheel"/>
            <img src={require('../../assets/images/ball.png')} className={"img-fluid r-ball " + props.rotate_ball} alt="Roulette Ball"/>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        wheel_img_name: state.wheel_img_name,
        rotate_wheel: state.rotate_wheel,
        rotate_ball: state.rotate_ball
    }
}

export default connect(mapStateToProps)(WheelStand);