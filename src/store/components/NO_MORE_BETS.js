export const NO_MORE_BETS = (state) => {
  //Setting up localStorage
  if (typeof(Storage) !== 'undefined') {
    window.localStorage.setItem('number_checked', JSON.stringify(state.number_checked));
    window.localStorage.setItem('outside_bets_names', JSON.stringify(state.outside_bets_names));
  }
  return {
      ...state,
      button_text: 'No more bets!',
      remove_bet_text: 'Bets accepted',
      disabled_btn: 'disabled',
      show_timer: false,
  }
}