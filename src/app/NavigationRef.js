import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(params);
  }
}
