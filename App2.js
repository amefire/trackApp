import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

imoprt {Home} from './Home.js'

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App2;