import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  Button,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import Voice from '@react-native-voice/voice';
// import RNFS from 'react-native-fs';

export default function recording1() {
  // const [state, setState] = useState({
  //   email: '',
  //   password: '',
  // });
  const [started, setStarted] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startSpeechToText = async () => {
    await Voice.start('en-US');
    setStarted(true);
  };

  const stopSpeechToText = async () => {
    await Voice.stop();
    setStarted(false);
    // saveSpeechToJSON();
  };

  const onSpeechResults = (result) => {
    setResults(result.value);
  };

  const onSpeechError = (error) => {
    console.log(error);
  };

  // const saveSpeechToJSON = async () => {
  //   const utterances = results.join(' ');
  //   console.log(utterances);
  //   const path = RNFS.DocumentDirectoryPath + 'utterances.json';
  //   try {
  //     const file = await RNFS.readFile(path, 'utf8');
  //     const data = JSON.parse(file);
  //     data.utterances.push(utterances);
  //     await RNFS.writeFile(path, JSON.stringify(data));
  //   } catch (error) {
  //     const data = { utterances: [utterances] };
  //     await RNFS.writeFile(path, JSON.stringify(data));
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', marginTop: 30, marginLeft: 25 }}>
        <TouchableOpacity>
          <Image
            source={require('../images/record/Group.png')}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image
            source={require('../images/record/Group4.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
          Ready to listen
        </Text>
      </View>
      <View style={{ width: '90%', alignItems: 'center', marginTop: 10 }}>
        <Image
          style={{ width: '80%' }}
          source={require('../images/record/soundwave.png')}
        />
      </View>
      <View>
        {!started ? (
          <Button title="Start" onPress={startSpeechToText} />
        ) : null}
        {started ? <Button title="Stop" onPress={stopSpeechToText} /> : null}
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
const styles = StyleSheet.create({
    container: {
      //flex: 1,
      display: 'flex',
      // flexDirection:"row",
      backgroundColor: '#34566A',
      height: '100%',
      width: '100%',
      alignItems: 'center',
      //justifyContent: 'space-between',
      //bottom:30,
  
    },
    title: {
      //flex: 1,
      fontWeight: "bold",
      fontSize: 20,
      color: "white",
      //marginBottom: 90,
      //top:40
      //marginTop:80
  
    },
  
    //   inputText: {
    //     height: 50,
    //     //color: "white"
    //   },
    //   forgotAndSignUpText: {
    //     color: "white",
    //     fontSize: 11
    //   },
  
    inputText: {
      // display:'flex',
      //backgroundColor:'green',
      height: 70,
      width: '100%',
      color: "white",
      borderColor: 'yellow',
      borderWidth: 2,
      borderRadius: 6,
      //textAlign: 'left'
  
    },
    yes_no_Btn: {
      //  display:flex,
      width: "25%",
      backgroundColor: "#FFCD00",
      // borderRadius: 19,
      height: 30,
      // alignItems: "center",
      //justifyContent: "center",
      //marginTop: 40,
      //marginBottom: '70%'
    },
  });
  // export default App;
  