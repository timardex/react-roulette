export const CLOSE_LIST = (state) => {
  return {
    ...state,
    info_list: !state.info_list
  }
}