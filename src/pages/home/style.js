import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 985px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 650px;
`;

export const HomeRight = styled.div`
  padding-top: 30px;
  float: right;
  width: 280px;
`;

export const ListItem = styled.div`
  overflow: hidden
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    float: right;
    width: 150px;
    height: 100px;
    border-radius: 4px;
  }
  .iconfont {
    font-size: 12px;
    margin-right: 2px;
  }
`;

export const Diamond = styled.span`
  margin-right: 10px;
  color: #ea6f5a;
  font-size: 12px;
`;

export const Like = styled.span`
  margin-right: 10px;
  color: #b4b4b4;
  font-size: 12px;
`;

export const ListInfo = styled.div`
  margin-bottom: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  width: 500px;
  float: left;
  a {
    text-decoration: none;
  }
  .title {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 6px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  margin-top: 20px;
  width: 280px;
  height: 300px;
`;

export const WriterItem = styled.div`
  overflow: hidden;
  margin-bottom: 10px;
  width: 280px;
  height: 50px;
  img {
    margin-right: 10px;
    float: left;
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
  .nickname {
    margin: 10px 0;
    font-size: 13px;
    color: #333;
  }
  .desc {
    margin-top: 2px;
    font-size: 10px;
    color: #969696;
  }
  .concern {
    float: right;
    font-size: 13px;
    line-height: 48px;
    color: #42c02e;
    cursor: pointer;
  }
`;

export const WriterInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const WriterInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    margin-right: 2px;
    font-size: 12px;
    transition: all .3s ease-in;
    transform-origin: center center;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px 0;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 52px;
  height: 52px;
  font-size: 12px;
  line-height: 52px;
  text-align: center;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
`;
