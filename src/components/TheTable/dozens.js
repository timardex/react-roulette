import React from 'react';
import {connect} from 'react-redux';

const Dozens = props => {
    return (
        <div className="dozens other-numbers">
            {props.dozen1.map((value, index) => {
                return (
                    <div className="form-check form-check-inline col-sm-4" key={index} >
                        <label className={"form-check-label " + props.disabled_btn} htmlFor={value.id} title={value.numbers}>
                            <input className="form-check-input" type="checkbox" id={value.id} value={value.id} onChange={(e) => {props.getBet(value); props.chip_effect.play()}}/>
                            <span className="number-name">{value.name}</span>
                            {value.checked && <span className="chip"></span>}
                        </label>
                    </div>
                )
            })}
            {props.dozen2.map((value, index) => {
                return (
                    <div className="form-check form-check-inline col-sm-4" key={index} >
                        <label className={"form-check-label " + props.disabled_btn} htmlFor={value.id} title={value.numbers}>
                            <input className="form-check-input" type="checkbox" id={value.id} value={value.id} onChange={(e) => {props.getBet(value); props.chip_effect.play()}}/>
                            <span className="number-name">{value.name}</span>
                            {value.checked && <span className="chip"></span>}
                        </label>
                    </div>
                )
            })}
            {props.dozen3.map((value, index) => {
                return (
                    <div className="form-check form-check-inline col-sm-4" key={index} >
                        <label className={"form-check-label " + props.disabled_btn} htmlFor={value.id} title={value.numbers}>
                            <input className="form-check-input" type="checkbox" id={value.id} value={value.id} onChange={(e) => {props.getBet(value); props.chip_effect.play()}}/>
                            <span className="number-name">{value.name}</span>
                            {value.checked && <span className="chip"></span>}
                        </label>
                    </div>
                )
            })}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        disabled_btn: state.disabled_btn,
        chip_effect: state.chip_effect,
        dozen1: state.dozen1_numbers,
        dozen2: state.dozen2_numbers,
        dozen3: state.dozen3_numbers,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getBet:(element) => {
            const action = {type: 'GET_OUTSIDE_BETS', element: element};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dozens);