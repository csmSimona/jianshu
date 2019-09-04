import * as actionTypes from './actionTypes';
import axios from 'axios';

const changeHomeData = (data) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  articleList: data.articleList,
  recommendList: data.recommendList,
  writerList: data.writerList,
  totalPage: Math.ceil(data.writerList.length / 5)
});

const addHomeData = (data, nextPage) => ({
  type: actionTypes.ADD_ARTICLE_LIST,
  articleList: data,
  nextPage
});

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
});

export const toggleTopShow = (flag) => ({
  type: actionTypes.TOGGLE_SCROLL_TOP,
  flag
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    }).catch(() => {
      console.log('error');
    })
  }
};

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeData(result, page + 1));
    }).catch(() => {
      console.log('error');
    })
  }
};
