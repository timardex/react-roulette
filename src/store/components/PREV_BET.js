import {previouseNumberBets, previouseOutsideBets } from '../helpers.js';

export const PREV_BET = (state) => {
  state.outside_bets_names = JSON.parse(window.localStorage.getItem('outside_bets_names'))
  state.number_checked = JSON.parse(window.localStorage.getItem('number_checked'))
            
  return {
      ...state,
      number_zero: previouseNumberBets(state.number_checked, state.number_zero),
      number_first_column: previouseNumberBets(state.number_checked, state.number_first_column),
      number_second_column: previouseNumberBets(state.number_checked, state.number_second_column),
      number_third_column: previouseNumberBets(state.number_checked, state.number_third_column),
      low_numbers: previouseOutsideBets(state.outside_bets_names, state.low_numbers),
      even_numbers: previouseOutsideBets(state.outside_bets_names, state.even_numbers),
      red_numbers: previouseOutsideBets(state.outside_bets_names, state.red_numbers),
      black_numbers: previouseOutsideBets(state.outside_bets_names, state.black_numbers),
      odd_numbers: previouseOutsideBets(state.outside_bets_names, state.odd_numbers),
      high_numbers: previouseOutsideBets(state.outside_bets_names, state.high_numbers),
      dozen1_numbers: previouseOutsideBets(state.outside_bets_names, state.dozen1_numbers),
      dozen2_numbers: previouseOutsideBets(state.outside_bets_names, state.dozen2_numbers),
      dozen3_numbers: previouseOutsideBets(state.outside_bets_names, state.dozen3_numbers),
      cylinder_numbers: previouseOutsideBets(state.outside_bets_names, state.cylinder_numbers),
      orphelin_numbers: previouseOutsideBets(state.outside_bets_names, state.orphelin_numbers),
      voison_numbers: previouseOutsideBets(state.outside_bets_names, state.voison_numbers),
      jeu0_numbers: previouseOutsideBets(state.outside_bets_names, state.jeu0_numbers),
      column1_numbers: previouseOutsideBets(state.outside_bets_names, state.column1_numbers),
      column2_numbers: previouseOutsideBets(state.outside_bets_names, state.column2_numbers),
      column3_numbers: previouseOutsideBets(state.outside_bets_names, state.column3_numbers),
      show_prev_bet_btn: false,
      current_chip: state.current_chip - (state.number_checked.length + state.outside_bets_names.length)
  }
}