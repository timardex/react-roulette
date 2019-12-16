import React from 'react';
import {connect} from 'react-redux';

const NumbersFirstColumn = props => {
    return (
        <div className="first-column columns">
            {props.number_first_column.map((value, index) => {
                return (
                    <div className="form-check form-check-inline" key={index} >
                        <label className={"form-check-label " + props.disabled_btn} htmlFor={value.id} title={value.numbers}>
                            <input className="form-check-input" type="checkbox" id={value.id} value={value.id} onChange={(e) => {props.getBet(value); props.chip_effect.play()}}/>
                            <span>{value.name}</span>
                            {value.checked && <span className="chip"></span>}
                            <span className="dolly"></span>
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
        number_first_column: state.number_first_column,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getBet:(element) => {
            const action = {type: 'GET_NUMBER_BETS', element: element};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NumbersFirstColumn);