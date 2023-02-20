import {Provider} from 'react-redux';

import {AppRegistry} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {name as appName} from './app.json';
import App from './src/App';
import store, {persistor} from './src/redux/store';

const ReduxProvider = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxProvider);
