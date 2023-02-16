import {Provider} from 'react-redux';

import {AppRegistry} from 'react-native';
import store from '../AwesomeProject/src/app/store';
import {name as appName} from './app.json';
import App from './src/App';

const ReduxProvider = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxProvider);
