import * as actionTypes from './actionTypes';
import axios from 'axios';

export const toggleTopShow = (flag) => ({
  type: actionTypes.TOGGLE_SCROLL_TOP,
  flag
});

const changeDetailData = (data) => ({
  type: actionTypes.CHANGE_DETAIL_DATA,
  title: data.title,
  content: data.content
});

export const getDetailInfo = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const result = res.data.data;
      dispatch(changeDetailData(result));
    }).catch(() => {
      console.log('error');
    })
  }
};