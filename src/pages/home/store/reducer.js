import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1,
  showScroll: false,
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList),
        totalPage: action.totalPage
      });
    case actionTypes.ADD_ARTICLE_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(fromJS(action.articleList)),
        articlePage: fromJS(action.nextPage)
      });
    case actionTypes.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.flag);
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
}