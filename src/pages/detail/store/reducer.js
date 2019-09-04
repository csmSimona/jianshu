import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  title: '简书一年，我找到了一份好工作',
  content: '<img alt="" src="https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg"></img><p><b>这是我的亲身经历，没有虚构，虽然它听起来不像真的。</b></p><p>2017年11月7日  星期二 晴</p><p>说起来很惭愧，在简书写了一年的文，至今，我还是原来的我，既没有签约，也没有写出爆文，甚至连一篇像样点的、拿得出手的文字也没有。</p><p>相反，嘲笑和挖苦的话倒是听了不少。当面的，背后的，直接了当的，含沙射影的，比比皆是。</p><p>所有这些，都曾伤透了我的心，我苦恼、彷徨，为自己因为在简书写文而越来越不受人待见而痛苦不堪。</p>'
});

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}