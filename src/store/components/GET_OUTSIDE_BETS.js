import {checkNumbers, onlyUnique} from '../helpers';

export const GET_OUTSIDE_BETS = (state, action) => {
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
}