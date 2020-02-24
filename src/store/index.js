import initialState from './initialState';
import {onlyUnique, removeNumbers, checkNumbers, getGameResult, winningWithOutsideBets, winningWithNumberBets} from './helpers.js';
import {createStore} from 'redux';

const reducer = (state = initialState, action) => {

    let _output_number = Math.floor((Math.random() * 5) + 0);
    let _winning_with_outside = [];
    let _update_outsidebet_names = [];

    switch(action.type) {
        case 'GAME_RESULT':
            let _number_is_red = getGameResult(state.list_red_numbers, _output_number);
            let _number_is_black = getGameResult(state.list_black_numbers, _output_number);
            let _number_is_dozen1 = getGameResult(state.list_dozen_1_numbers, _output_number);
            let _number_is_dozen2 = getGameResult(state.list_dozen_2_numbers, _output_number);
            let _number_is_dozen3 = getGameResult(state.list_dozen_3_numbers, _output_number);
            let _number_is_1st_column = getGameResult(state.list_first_column_numbers, _output_number);
            let _number_is_2nd_column = getGameResult(state.list_second_column_numbers, _output_number);
            let _number_is_3rd_column = getGameResult(state.list_third_column_numbers, _output_number);
            let _number_is_cylinder = getGameResult(state.list_cylinder_numbers, _output_number);
            let _number_is_orphelin = getGameResult(state.list_orphelin_numbers, _output_number);
            let _number_is_voison = getGameResult(state.list_voison_numbers, _output_number);
            let _number_is_jeu0 = getGameResult(state.list_jeu0_numbers, _output_number);

            let _text_even_odd = 
                (_output_number % 2 === 0 && _output_number !== 0) ? 'Even' : 
                (_output_number % 2 !== 0 && _output_number !== 0) ? 'Odd' :  'Neutral';

            let _text_number_color = 
                (_output_number === _number_is_red && _output_number !== 0) ? 'Red' : 
                (_output_number === _number_is_black && _output_number !== 0) ? 'Black' :  'Green';

            let _text_dozen = 
                (_output_number === _number_is_dozen1 && _output_number !== 0) ? '1st Dozen' : 
                (_output_number === _number_is_dozen2 && _output_number !== 0) ? '2nd Dozen' :  
                (_output_number === _number_is_dozen3 && _output_number !== 0) ? '3rd Dozen' :  'Not part of Dozen';

            let _text_low_high = 
                (_output_number >= 1 && _output_number <= 18) ? 'Low number (between 1 and 18)' : 
                _output_number >= 19 ? 'High number (between 19 and 36)' :  'Not part of High Low numbers';

            let _text_column = 
                (_output_number === _number_is_1st_column && _output_number !== 0) ? '1st Column' : 
                (_output_number === _number_is_2nd_column && _output_number !== 0) ? '2nd Column' :  
                (_output_number === _number_is_3rd_column && _output_number !== 0) ? '3rd Column' :  'Not part of Column';

            let _text_racetrack = 
                _output_number === _number_is_cylinder ? 'Tiers du Cylinder section' : 
                _output_number === _number_is_orphelin ? 'Orphelins section' :  
                (_output_number === _number_is_jeu0 && _output_number === _number_is_voison) || _output_number === 0 ? 'Voison du Zero and Jeu 0 section' :
                _output_number === _number_is_voison ? 'Voison du Zero section' : 'NaN';
                
            let addWinner = document.querySelectorAll(`.number-${_output_number}`);
            addWinner.forEach(el => el.classList.add('winner-number'))

            let _win_lose_with_number_bets = getGameResult(state.number_checked, _output_number);

            winningWithOutsideBets(state.low_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
            winningWithOutsideBets(state.even_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
            winningWithOutsideBets(state.red_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
            winningWithOutsideBets(state.black_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
            winningWithOutsideBets(state.odd_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
            winningWithOutsideBets(state.high_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
            winningWithOutsideBets(state.dozen1_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
            winningWithOutsideBets(state.dozen2_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
            winningWithOutsideBets(state.dozen3_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
            winningWithOutsideBets(state.cylinder_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
            winningWithOutsideBets(state.orphelin_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
            winningWithOutsideBets(state.voison_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
            winningWithOutsideBets(state.jeu0_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
            winningWithOutsideBets(state.column1_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
            winningWithOutsideBets(state.column2_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);
            winningWithOutsideBets(state.column3_numbers, state.outside_bets, state.outside_bets_names, _update_outsidebet_names, _winning_with_outside, _output_number);

            let _winner_is_number = state.number_checked.includes(_output_number);
            let _winning_with_number = _winner_is_number ? state.winning_with.concat(_win_lose_with_number_bets) : [];
            let _winning_with = [..._winning_with_outside, ..._winning_with_number];

            winningWithNumberBets(state.number_first_column, state.number_checked, _output_number);
            winningWithNumberBets(state.number_second_column, state.number_checked, _output_number);
            winningWithNumberBets(state.number_third_column, state.number_checked, _output_number);
            winningWithNumberBets(state.number_zero, state.number_checked, _output_number);

            let _number_checked = state.number_checked.filter(item => item === _output_number) //keep just winning number

            let _current_chip = _number_checked.length > 0 && !_update_outsidebet_names.length > 0 ? state.current_chip+35 : 
            _update_outsidebet_names.length > 0 && !_number_checked.length > 0 ? state.current_chip+(_update_outsidebet_names.length*10) :
            _number_checked.length > 0 && _update_outsidebet_names.length > 0 ? (state.current_chip+35)+(_update_outsidebet_names.length*10) : state.current_chip;

            let _chip_ammount_won = _number_checked.length > 0 && !_update_outsidebet_names.length > 0 ? 35 : 
            _update_outsidebet_names.length > 0 && !_number_checked.length > 0 ? _update_outsidebet_names.length*10 :
            _number_checked.length > 0 && _update_outsidebet_names.length > 0 ? (state.outside_bets_names.length*10)+35 : null;

            return {
                ...state,
                    output_number: _output_number,
                    rotate_ball: 'hide',
                    button_text: 'Spin it!',
                    remove_bet_text: 'Remove bets',
                    winning_with: _winning_with,
                    disabled_btn: '',
                    disabled_spin: '',
                    info_list: true,
                    last_numbers: state.last_numbers.concat(_output_number),
                    text_even_odd: _text_even_odd,
                    text_number_color: _text_number_color,
                    text_dozen: _text_dozen,
                    text_low_high: _text_low_high,
                    text_column: _text_column,
                    text_racetrack: _text_racetrack,
                    outside_bets_names: _update_outsidebet_names,
                    number_checked: _number_checked,
                    current_chip: _current_chip,
                    chip_ammount_won: _chip_ammount_won
            }
        case 'SPIN_BALL':
            let removeWinner = document.querySelectorAll('.form-check-label, .number')
            removeWinner.forEach(el => el.classList.remove('winner-number'))
            
            return {
                ...state,
                    spin_btn: !state.spin_btn,
                    rotate_wheel: state.spin_btn ? 'rotate-right' : 'rotate-left',
                    rotate_ball: state.spin_btn ? 'rotate-left show' : 'rotate-right show',
                    button_text: 'Place your bets please!',
                    disabled_spin: 'disabled',
                    output_number: null,
                    show_timer: true,
                    winning_with: [],
            }
        case 'NO_MORE_BETS': 
            return {
                ...state,
                    button_text: 'No more bets!',
                    remove_bet_text: 'Bets accepted',
                    disabled_btn: 'disabled',
                    show_timer: false,
            }
        case 'GET_OUTSIDE_BETS':
            return {
                ...state,
                    low_numbers: checkNumbers(state.low_numbers, action.element),
                    even_numbers: checkNumbers(state.even_numbers, action.element),
                    red_numbers: checkNumbers(state.red_numbers, action.element),
                    black_numbers: checkNumbers(state.black_numbers, action.element),
                    odd_numbers: checkNumbers(state.odd_numbers, action.element),
                    high_numbers: checkNumbers(state.high_numbers, action.element),
                    dozen1_numbers: checkNumbers(state.dozen1_numbers, action.element),
                    dozen2_numbers: checkNumbers(state.dozen2_numbers, action.element),
                    dozen3_numbers: checkNumbers(state.dozen3_numbers, action.element),
                    cylinder_numbers: checkNumbers(state.cylinder_numbers, action.element),
                    orphelin_numbers: checkNumbers(state.orphelin_numbers, action.element),
                    voison_numbers: checkNumbers(state.voison_numbers, action.element),
                    jeu0_numbers: checkNumbers(state.jeu0_numbers, action.element),
                    column1_numbers: checkNumbers(state.column1_numbers, action.element),
                    column2_numbers: checkNumbers(state.column2_numbers, action.element),
                    column3_numbers: checkNumbers(state.column3_numbers, action.element),
                    outside_bets: 
                        action.element.checked ? 
                            state.outside_bets.concat(action.element.numbers).filter(onlyUnique)
                        : 
                            state.outside_bets.filter(item => !action.element.numbers.includes(item)).concat(action.element.numbers).filter(onlyUnique),
                    outside_bets_names: 
                        action.element.checked ?
                            state.outside_bets_names.concat(action.element.name)
                        :
                            state.outside_bets_names.filter(item => !action.element.name.includes(item)),
                    current_chip: action.element.checked ? state.current_chip = state.current_chip - 1 : state.current_chip = state.current_chip + 1
                    
            }
        case 'GET_NUMBER_BETS':
            return {
                ...state,
                    number_zero: checkNumbers(state.number_zero, action.element),
                    number_first_column: checkNumbers(state.number_first_column, action.element),
                    number_second_column: checkNumbers(state.number_second_column, action.element),
                    number_third_column: checkNumbers(state.number_third_column, action.element),
                    number_checked: 
                        action.element.checked ?
                            state.number_checked.concat(action.element.numbers)
                        :
                            state.number_checked.filter(item => item !== action.element.numbers),
                    current_chip: action.element.checked ? state.current_chip = state.current_chip - 1 : state.current_chip = state.current_chip + 1
            }
        case 'REMOVE_BETS':
            return {
                ...state,
                    low_numbers: removeNumbers(state.low_numbers),
                    even_numbers: removeNumbers(state.even_numbers),
                    red_numbers: removeNumbers(state.red_numbers),
                    black_numbers: removeNumbers(state.black_numbers),
                    odd_numbers: removeNumbers(state.odd_numbers),
                    high_numbers: removeNumbers(state.high_numbers),
                    dozen1_numbers: removeNumbers(state.dozen1_numbers),
                    dozen2_numbers: removeNumbers(state.dozen2_numbers),
                    dozen3_numbers: removeNumbers(state.dozen3_numbers),
                    cylinder_numbers: removeNumbers(state.cylinder_numbers),
                    orphelin_numbers: removeNumbers(state.orphelin_numbers),
                    voison_numbers: removeNumbers(state.voison_numbers),
                    jeu0_numbers: removeNumbers(state.jeu0_numbers),
                    column1_numbers: removeNumbers(state.column1_numbers),
                    column2_numbers: removeNumbers(state.column2_numbers),
                    column3_numbers: removeNumbers(state.column3_numbers),
                    number_zero: removeNumbers(state.number_zero),
                    number_first_column: removeNumbers(state.number_first_column),
                    number_second_column: removeNumbers(state.number_second_column),
                    number_third_column: removeNumbers(state.number_third_column),
                    outside_bets: [],
                    outside_bets_names: [],
                    number_checked: [],
                    remove_bet_btn: false,
                    current_chip: state.current_chip + state.number_checked.length + state.outside_bets_names.length,
                    chip_ammount_won: null
            }
        case 'CLOSE_LIST':
            return {
                ...state,
                    info_list: !state.info_list
            }
        case 'RESET_CHIPS':
            return {
                ...state,
                current_chip: 50
            }
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;