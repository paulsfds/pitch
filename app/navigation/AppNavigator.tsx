import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Login from '../views/Login';
import Signup from '../views/Signup';
import Topics from '../views/Topics';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const isAuthenticated = useSelector((state: RootState) => !!state.auth.user);

  return (
    <Stack.Navigator>
      {!isAuthenticated ? (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </>
      ) : (
        <>
          <Stack.Screen name="Topics" component={Topics} />
          {/* Add other authenticated screens */}
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;