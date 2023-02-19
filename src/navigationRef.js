import { createNavigationContainerRef } from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

export const navigate = params => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(params);
  }
};

export default navigationRef;
