import React, {PureComponent} from 'react';
import {
  ListItem,
  ListInfo,
  Diamond,
  Like,
  LoadMore
} from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render() {
    const { list, page, getMoreList } = this.props;
    return (
      <div>
        {list.map((item, index) => {
          return (
            <ListItem key={index}>
              <img className='pic' alt='' src={item.get('imgUrl')} />
              <ListInfo>
                <Link to='/detail'>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </Link>
              </ListInfo>
              <Diamond><span className="iconfont">&#xe63d;</span>{item.get('diamond')}</Diamond>
              <Like>{item.get('writer')}</Like>
              <Like><span className="iconfont">&#xe85c;</span>{item.get('like')}</Like>
              <Like><span className="iconfont">&#xe611;</span>{item.get('award')}</Like>
            </ListItem>
          );
        })}
        <LoadMore onClick={() => getMoreList(page)}>更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapState, mapDispatch)(List);