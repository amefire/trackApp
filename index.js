/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import App1 from './App1';
import recording1 from './native_components/recording1';
import save from './native_components/save';

// import BookContent from './native_components/BookContent';
// import BookSentencesRead from './native_components/BookSentencesRead';
// import UtteranceBox from './native_components/UtteranceBox';
// import UtterancesDisplay from './native_components/UtterancesDisplay';

// AppRegistry.registerComponent(appName, () => App);

// AppRegistry.registerComponent(appName, () => save);

AppRegistry.registerComponent(appName, () => recording1);
