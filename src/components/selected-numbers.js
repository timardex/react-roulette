import React from 'react';
import {connect} from 'react-redux';

const SelectedNumbers = props => {
    return(
        <div className="selected-numbers max-width">
            <p className="info styled-number">
                {props.number_checked.map((value, index) => {
                    return <span key={index} data-id={value}>
                                {value}
                            </span>
                })}
            </p>
            <ul className="list-inline">
                {props.outside_bets_names.map((value, index) => {
                    return <li className="list-inline-item" key={index}>
                                {value}
                            </li>
                })}
            </ul>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        number_checked: state.number_checked,
        outside_bets_names: state.outside_bets_names,
    }
}
export default connect(mapStateToProps)(SelectedNumbers);