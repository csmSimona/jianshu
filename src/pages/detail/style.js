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
