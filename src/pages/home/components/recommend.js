import React, {PureComponent} from 'react';
import {
  RecommendWrapper,
  RecommendItem
} from '../style';
import { connect } from 'react-redux';

class Recommend extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      list.map((item) => {
        return (
          <RecommendWrapper key={item.get('id')}>
            <RecommendItem imgUrl={item.get('imgUrl')} />
          </RecommendWrapper>
        );
      })
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState)(Recommend);