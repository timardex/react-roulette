import {removeNumbers} from '../helpers';

export const REMOVE_BETS = (state) => {
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
}