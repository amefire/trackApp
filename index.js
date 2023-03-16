/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import recording1 from './native_components/recording1';
import save from './native_components/save';

// AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent(appName, () => save);
