import {checkNumbers} from '../helpers';

export const GET_NUMBER_BETS = (state, action) => {
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
}