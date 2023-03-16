
// import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// ///
import save from './native_components/save';

import bookSentencesRead from './native_components/BookSentencesRead';
import UtteranceBox from './native_components/UtteranceBox';
import BookContent from './native_components/BookContent'; //5 works
import UtterancesDisplay from './native_components/UtterancesDisplay'; //4 display content of book_sentences_read.json

///

// imlort {NavigationContainer}
import Home from './Home';
import Settings from './Settings';
// import recording1 from './native_components/recording1';



const Drawer = createDrawerNavigator();


export default function App1() {
  
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      {/* <Drawer.Screen name="record" component={recording1} /> */}
      <Drawer.Screen name="utterances" component={UtteranceBox} />
      <Drawer.Screen name="book_sentences" component={bookSentencesRead} />
      <Drawer.Screen name="save" component={save} />
      <Drawer.Screen name="similarity check" component={BookContent} />
      <Drawer.Screen name="book_sentences_read" component={UtterancesDisplay} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}