import React from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import { GrobalStyle } from './style';
import { GrobalIconStyle } from './statics/iconfont/iconfont';
import store from './store';

function App() {
  return (
    <div>
      <GrobalStyle />
      <GrobalIconStyle />
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
