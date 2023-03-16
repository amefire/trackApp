import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import RNFS from 'react-native-fs';

export default function save() {
  const [fileContent, setFileContent] = useState('');
  const [filePath, setFilePath] = useState('');

  useEffect(() => {
    const fileUri = RNFS.DocumentDirectoryPath + '/data.txt';
    setFilePath(fileUri);
    try {
      let content = `Hello.
       bn . bs sd . sdfe . do;, let's.
        sdd`;
      content = content.replace(/[\n\t ]+/g, ' ').trim(); 

      RNFS.writeFile(fileUri, content, 'utf8')
        .then(() => console.log(`File saved to ${fileUri}`))
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }

    RNFS.readFile(fileUri, 'utf8')
      .then(content => setFileContent(content))
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>File path: {filePath}</Text>
      <Text>File content: {fileContent}</Text>
    </View>
  );
}
