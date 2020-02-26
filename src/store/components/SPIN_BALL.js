export const SPIN_BALL = (state) => {
  let removeWinner = document.querySelectorAll('.form-check-label, .number')
  removeWinner.forEach(el => el.classList.remove('winner-number'))
  window.localStorage.clear();
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
      show_prev_bet_btn: true,
      chip_ammount_won: null
  }
}