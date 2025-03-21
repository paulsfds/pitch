import { Slot } from 'expo-router';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';
import AppNavigator from './navigation/AppNavigator';

export default function RootLayout() {
  return (
    <ReduxProvider store={store}>
      <AppNavigator />
    </ReduxProvider>
  );
}