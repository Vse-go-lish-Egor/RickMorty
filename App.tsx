import React from 'react';
import {Provider} from 'react-redux';
import {Root} from './src/navigation/MainNavigator';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};
export default App;
