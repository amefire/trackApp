import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import RNFS from 'react-native-fs';

const UtterancesDisplay = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadUtterances = async () => {
      try {
        const fileUri = `${RNFS.DocumentDirectoryPath}/utterances.json`;
        const fileUri2 = `${RNFS.DocumentDirectoryPath}/book_sentences.json`;
        const fileUri3 = `${RNFS.DocumentDirectoryPath}/book_sentences_read.json`;
        const fileUri4 = `${RNFS.DocumentDirectoryPath}/data.txt`;

        const content = await RNFS.readFile(fileUri2, 'utf8');
        console.log('fileUri:', fileUri3);
        console.log('fileContent:', content);

        setContent(content);

      } catch (error) {
        console.error(error);
      }
    };
    loadUtterances();
  }, []);

  return (
    <View style={{flex:1, marginTop:80}}>
      <Text>Collecting book_sentences_read...</Text>
      <Text>{content}</Text>
    </View>
  );
};

export default UtterancesDisplay;
