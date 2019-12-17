import React from 'react';
import {connect} from 'react-redux';

const InfoList = props => {
    let info_list;
    if(props.output_number !== null) {
        info_list = <div className="info-list-inner">
                        <div className="inner-list">
                            <div className="win-lose styled-number">                                
                                {
                                    props.winning_with.length > 0 ?
                                    <div className="winning-with">
                                        Congrats! You won with:
                                        <ul>
                                            {props.winning_with.map((value, index) => {
                                                return (
                                                    <li key={index}>
                                                        {value}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    :
                                    <div className="info-before-spin">Place your bets please! <small>You can place your bets until <i><b>No more bets</b></i> is called!</small></div>
                                }
                            </div>
                            
                            <p className="text-center styled-number">Number <span data-id={props.output_number}>{props.output_number}</span> is:</p>
                            <ul className="list-group">
                                <li className="list-group-item">{props.text_even_odd}</li>
                                <li style={{backgroundColor: props.text_number_color}} className="list-group-item red-or-black">{props.text_number_color}</li>
                                <li className="list-group-item">{props.text_dozen}</li>
                                <li className="list-group-item">{props.text_low_high}</li>
                                <li className="list-group-item">{props.text_column}</li>
                                <li className="list-group-item">{props.text_racetrack}</li>
                            </ul>
                        </div>
                    </div>
    } else {
        info_list = <div className="info-before-spin">
                        Place your bets please! <small>You can place your bets until <i><b>No more bets</b></i> is called!</small>
                        {props.last_numbers.length !== 0 && <div className="last-numbers row">
                            <div className="col-12">
                                <p className="text-center"><u>Last numbers are:</u></p>
                            </div>

                            <div className="col-12">
                                {props.last_numbers.map((value, index) => {
                                    return <span className="items" key={index} data-id={value}>
                                                {value}
                                            </span>
                                })}
                            </div>
                        </div>}
                    </div>
    }

    return (
        <div className={`info-list ${props.info_list ? 'active' : ''}`}>
            <span className={`close-this chevron ${props.info_list ? 'right' : 'left'}`} onClick={(e) => props.closeList()}></span>
            <div className="the-list">
                {info_list}
            </div>                        
        </div>
    )
}

function mapStateToProps(state) {
    return {
        info_list: state.info_list,
        output_number: state.output_number,
        last_numbers: state.last_numbers,
        win_lose: state.win_lose,
        winning_with: state.winning_with,
        text_even_odd: state.text_even_odd,
        text_number_color: state.text_number_color,
        text_dozen: state.text_dozen,
        text_low_high: state.text_low_high,
        text_column: state.text_column,
        text_racetrack: state.text_racetrack
    }
}

function mapDispatchToProps(dispatch) {
    return {
        closeList:() => {
            const action = {type: 'CLOSE_LIST'};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoList);