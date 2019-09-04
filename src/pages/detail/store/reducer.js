import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  title: '',
  content: '',
  showScroll: false
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_DETAIL_DATA:
      return state.merge({
        title: fromJS(action.title),
        content: fromJS(action.content)
      });
    case actionTypes.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.flag);
    default:
      return state;
  }
}