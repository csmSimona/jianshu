import React, {PureComponent} from 'react';
import {
  WriterWrapper,
  WriterInfoTitle,
  WriterInfoSwitch,
  WriterItem
} from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

class Writer extends PureComponent {
  getList() {
    const { list, page } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 5; i < page * 5; i++) {
        pageList.push(
          <WriterItem key={newList[i].id}>
            <img alt='' src={newList[i].imgUrl} />
            <div className='concern'>+关注</div>
            <div className='nickname'>{newList[i].nickname}</div>
            <div className='desc'>写了{newList[i].like}字 · {newList[i].totalwords}喜欢</div>
          </WriterItem>
        )
      }
    }
    return pageList;
  }

  render() {
    const { handleChangePage, page, totalPage } = this.props;
    return (
      <WriterWrapper>
        <WriterInfoTitle>
          推荐作者
          <WriterInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
            <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
            换一批
          </WriterInfoSwitch>
        </WriterInfoTitle>
        {this.getList()}
      </WriterWrapper>
    )
  }
}


const mapState = (state) => {
  return {
    page: state.getIn(['home', 'page']),
    totalPage: state.getIn(['home', 'totalPage']),
    list: state.getIn(['home', 'writerList'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) +'deg)';
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  }
}

export default connect(mapState, mapDispatch)(Writer);