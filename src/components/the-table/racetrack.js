import React from 'react';
import {connect} from 'react-redux';

const Racetrack = props => {
    return (
        <div className="racetrack other-numbers">
            {props.cylinder.map((value, index) => {
                return (
                    <div className="form-check form-check-inline col-sm-3" key={index} >
                        <label className={"form-check-label " + props.disabled_btn} htmlFor={value.id} title={value.numbers}>
                            <input className="form-check-input" type="checkbox" id={value.id} value={value.id} onChange={(e) => {props.getBet(value); props.chip_effect.play()}}/>
                            <span>{value.name}</span>
                            {value.checked && <span className="chip"></span>}
                        </label>
                    </div>
                )
            })}
            {props.orphelin.map((value, index) => {
                return (
                    <div className="form-check form-check-inline col-sm-3" key={index} >
                        <label className={"form-check-label " + props.disabled_btn} htmlFor={value.id} title={value.numbers}>
                            <input className="form-check-input" type="checkbox" id={value.id} value={value.id} onChange={(e) => {props.getBet(value); props.chip_effect.play()}}/>
                            <span>{value.name}</span>
                            {value.checked && <span className="chip"></span>}
                        </label>
                    </div>
                )
            })}
            {props.voison.map((value, index) => {
                return (
                    <div className="form-check form-check-inline col-sm-3" key={index} >
                        <label className={"form-check-label " + props.disabled_btn} htmlFor={value.id} title={value.numbers}>
                            <input className="form-check-input" type="checkbox" id={value.id} value={value.id} onChange={(e) => {props.getBet(value); props.chip_effect.play()}}/>
                            <span>{value.name}</span>
                            {value.checked && <span className="chip"></span>}
                        </label>
                    </div>
                )
            })}
            {props.jeu0.map((value, index) => {
                return (
                    <div className="form-check form-check-inline col-sm-3" key={index} >
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
        cylinder: state.cylinder_numbers,
        orphelin: state.orphelin_numbers,
        voison: state.voison_numbers,
        jeu0: state.jeu0_numbers,
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

export default connect(mapStateToProps, mapDispatchToProps)(Racetrack);