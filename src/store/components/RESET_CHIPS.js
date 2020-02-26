export const RESET_CHIPS = (state) => {
  window.localStorage.clear();
  return {
    ...state,
    current_chip: 20,
    show_prev_bet_btn: false
  }
}