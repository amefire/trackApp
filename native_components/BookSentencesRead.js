import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import RNFS from 'react-native-fs';

export default function BookSentencesRead() {
  const [content, setContent] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const content = await RNFS.readFile(RNFS.DocumentDirectoryPath + '/data.txt', 'utf8');
        const cleanedContent = content.replace(/[\n\t ]+/g, ' ').trim();
        const sentences = cleanedContent.split('.').map((sentence, index) => {
          return {
            id: index + 1,
            sentence: sentence.trim(),
            num_of_words: sentence.trim().split(' ').length
          };
        }).filter(sentence => sentence.sentence !== '');

        console.log(sentences);

        const jsonData = JSON.stringify(sentences);

        await RNFS.writeFile(RNFS.DocumentDirectoryPath + '/book_sentences.json', jsonData, 'utf8');
      } catch (error) {
        console.error(error);
      }
    };

    getData();

    const readData = async () => {
      try {
        const fileUri = RNFS.DocumentDirectoryPath + '/book_sentences.json';
        const content = await RNFS.readFile(fileUri, 'utf8');
        setContent(content);
      } catch (error) {
        console.log(error);
      }
    };

    readData();
  }, []);

  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      <Text>Collecting sentences from data.txt and storing them in book_sentences.json...</Text>
      <Text>{content}</Text>
    </View>
  );
}
