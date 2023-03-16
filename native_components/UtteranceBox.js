import React, { useState, useEffect } from 'react';
import RNFS from 'react-native-fs';
import { View, Text, StyleSheet } from 'react-native';

const UtteranceBox = () => {
  const [utterances, setUtterances] = useState([]);

  useEffect(() => {
    const loadUtterances = async () => {
      try {
        const fileUri = `${RNFS.DocumentDirectoryPath}/utterances.json`;
        const fileContent = await RNFS.readFile(fileUri);

        const parsedContent = JSON.parse(fileContent);
        setUtterances(parsedContent.utterances);
      } catch (error) {
        console.error(error);
      }
    };
    loadUtterances();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Utterances</Text>
      {utterances.map((utterance, index) => (
        <View key={index} style={styles.utteranceBox}>
          <Text style={styles.utteranceText}>{utterance}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  utteranceBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  utteranceText: {
    fontSize: 18,
  },
});

export default UtteranceBox;
