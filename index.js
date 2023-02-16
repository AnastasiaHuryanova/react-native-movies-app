import {Provider} from 'react-redux';

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
import store from './src/redux/store';

const ReduxProvider = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxProvider);
