import React, {PureComponent} from 'react';
import {
  DetailWrapper,
  Header,
  Content,
  Writer,
  BackTop,
  Diamond
} from './style';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';

class Detail extends PureComponent {
  render() {
    const { title, content, showScroll } = this.props;
    return (
      <div>
        <DetailWrapper>
          <Header>{ title }</Header>
          <Writer>
            <img alt='' src='https://images.weserv.nl/?url=http://upload.jianshu.io/users/upload_avatars/3301720/daa79a77-5321-4149-add8-656c1326bc01.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96' />
            <div className='concern'>+关注</div>
            <div className='nickname'>陌上红裙</div>
            <div className='desc'>
              <Diamond><span className="iconfont">&#xe63d;</span> 2038.9 </Diamond>
              2017.11.07 22:00* 字数 2769 阅读 242467 评论 1812 喜欢 9798 赞赏 36</div>
          </Writer>
          <Content dangerouslySetInnerHTML={{__html: content}} />
        </DetailWrapper>
        {showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : ''}
      </div>
    )
  }
  
  componentDidMount() {
    this.props.changeDetailData(this.props.match.params.id);
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  handleScrollTop() {
    // window.scrollTo(0, 0);
    var scrollToptimer = setInterval(function () {
      var top = document.body.scrollTop || document.documentElement.scrollTop;
      var speed = top / 4;
      if (document.body.scrollTop!==0) {
        document.body.scrollTop -= speed;
      }else {
        document.documentElement.scrollTop -= speed;
      }
      if (top === 0) {
        clearInterval(scrollToptimer);
      }
    }, 30);
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
  showScroll: state.getIn(['detail', 'showScroll'])
});


const mapDispatch = (dispatch) => ({
  changeDetailData(id) {
    dispatch(actionCreators.getDetailInfo(id));
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));