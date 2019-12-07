import React from 'react';
import {connect} from 'react-redux';

const NoMoreBets = props => {
    return(
        <div className={"no-more-bets-overlay " + props.disabled_btn}>
            No more Bets!
        </div>
    )
}

function mapStateToProps(state) {
    return {
        disabled_btn: state.disabled_btn,
    }
}

export default connect(mapStateToProps)(NoMoreBets);