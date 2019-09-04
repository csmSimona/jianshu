import styled from 'styled-components';

export const DetailWrapper = styled.div`
  overflow: hidden;
  width: 620px;
  margin: 0 auto;
`;

export const Header = styled.div`
  margin: 50px 0 20px 0;
  line-height: 44px;
  font-size: 34px;
  color: #333;
  font-weight: bold;
`;

export const Content = styled.div`
  color: #2f2f2f;
  img {
    width: 100%;
  }
  p {
    margin: 25px 0;
    font-size: 16px;
    line-height: 30px;
  }
  b {
    font-weight: bold;
  }
`;

export const Writer = styled.div`
  overflow: hidden;
  margin: 10px 0;
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
    margin-top: 15px;
    padding: 4px;
    float: right;
    font-size: 12px;
    color: #fff;
    background: #42c02e;
    cursor: pointer;
    border: 1px solid #42c02e;
    border-radius: 5px;
  }
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

export const Diamond = styled.span`
  .iconfont {
    font-size: 10px;
  }
  color: #ea6f5a;
`;