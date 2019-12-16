import React from 'react';
import {connect} from 'react-redux';

const One2One = props => {
    return (
        <div className="one-2-one other-numbers">
            {props.low.map((value, index) => {
                return (
                    <div className="form-check form-check-inline col-sm-2" key={index} >
                        <label className={"form-check-label " + props.disabled_btn} htmlFor={value.id} title={value.numbers}>
                            <input className="form-check-input" type="checkbox" id={value.id} value={value.id} onChange={(e) => {props.getBet(value); props.chip_effect.play()}}/>
                            <span>{value.name}</span>
                            {value.checked && <span className="chip"></span>}
                        </label>
                    </div>
                )
            })}
            {props.even.map((value, index) => {
                return (
                    <div className="form-check form-check-inline col-sm-2" key={index} >
                        <label className={"form-check-label " + props.disabled_btn} htmlFor={value.id} title={value.numbers}>
                            <input className="form-check-input" type="checkbox" id={value.id} value={value.id} onChange={(e) => {props.getBet(value); props.chip_effect.play()}}/>
                            <span>{value.name}</span>
                            {value.checked && <span className="chip"></span>}
                        </label>
                    </div>
                )
            })}
            {props.red.map((value, index) => {
                return (
                    <div className="form-check form-check-inline col-sm-2" key={index} >
                        <label className={"form-check-label " + props.disabled_btn} htmlFor={value.id} title={value.numbers}>
                            <input className="form-check-input" type="checkbox" id={value.id} value={value.id} onChange={(e) => {props.getBet(value); props.chip_effect.play()}}/>
                            <span>{value.name}</span>
                            {value.checked && <span className="chip"></span>}
                        </label>
                    </div>
                )
            })}
            {props.black.map((value, index) => {
                return (
                    <div className="form-check form-check-inline col-sm-2" key={index} >
                        <label className={"form-check-label " + props.disabled_btn} htmlFor={value.id} title={value.numbers}>
                            <input className="form-check-input" type="checkbox" id={value.id} value={value.id} onChange={(e) => {props.getBet(value); props.chip_effect.play()}}/>
                            <span>{value.name}</span>
                            {value.checked && <span className="chip"></span>}
                        </label>
                    </div>
                )
            })}
            {props.odd.map((value, index) => {
                return (
                    <div className="form-check form-check-inline col-sm-2" key={index} >
                        <label className={"form-check-label " + props.disabled_btn} htmlFor={value.id} title={value.numbers}>
                            <input className="form-check-input" type="checkbox" id={value.id} value={value.id} onChange={(e) => {props.getBet(value); props.chip_effect.play()}}/>
                            <span>{value.name}</span>
                            {value.checked && <span className="chip"></span>}
                        </label>
                    </div>
                )
            })}
            {props.high.map((value, index) => {
                return (
                    <div className="form-check form-check-inline col-sm-2" key={index} >
                        <label className={"form-check-label " + props.disabled_btn} htmlFor={value.id} title={value.numbers}>
                            <input className="form-check-input" type="checkbox" id={value.id} value={value.id} onChange={(e) => {props.getBet(value); props.chip_effect.play()}}/>
                            <span>{value.name}</span>
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
        low: state.low_numbers,
        even: state.even_numbers,
        red: state.red_numbers,
        black: state.black_numbers,
        odd: state.odd_numbers,
        high: state.high_numbers,
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

export default connect(mapStateToProps, mapDispatchToProps)(One2One);