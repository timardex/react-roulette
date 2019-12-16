import React from 'react';
import {connect} from 'react-redux';

const ColumnNumbers = props => {
    return (
        <div className="column-line">
            {props.column3.map((value, index) => {
                return (
                    <div className="form-check form-check-inline" key={index} >
                        <label className={"form-check-label " + props.disabled_btn} htmlFor={value.id} title={value.numbers}>
                            <input className="form-check-input" type="checkbox" id={value.id} value={value.id} onChange={(e) => {props.getBet(value); props.chip_effect.play()}}/>
                            <span>{value.id}</span>
                            {value.checked && <span className="chip"></span>}
                        </label>
                    </div>
                )
            })}
            {props.column2.map((value, index) => {
                return (
                    <div className="form-check form-check-inline" key={index} >
                        <label className={"form-check-label " + props.disabled_btn} htmlFor={value.id} title={value.numbers}>
                            <input className="form-check-input" type="checkbox" id={value.id} value={value.id} onChange={(e) => {props.getBet(value); props.chip_effect.play()}}/>
                            <span>{value.id}</span>
                            {value.checked && <span className="chip"></span>}
                        </label>
                    </div>
                )
            })}
            {props.column1.map((value, index) => {
                return (
                    <div className="form-check form-check-inline" key={index} >
                        <label className={"form-check-label " + props.disabled_btn} htmlFor={value.id} title={value.numbers}>
                            <input className="form-check-input" type="checkbox" id={value.id} value={value.id} onChange={(e) => {props.getBet(value); props.chip_effect.play()}}/>
                            <span>{value.id}</span>
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
        column1: state.column1_numbers,
        column2: state.column2_numbers,
        column3: state.column3_numbers,
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

export default connect(mapStateToProps, mapDispatchToProps)(ColumnNumbers);