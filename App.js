import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import {store} from './store';
import BasketScreen from './screens/BasketScreen';  

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store} >
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Basket" component={BasketScreen} options={{ headerShown: false,presentation: 'modal' }  }
            />
          
          </Stack.Navigator>
        </TailwindProvider>

      </Provider>

    </NavigationContainer>
  );
}
