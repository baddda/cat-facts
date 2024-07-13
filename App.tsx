import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';
import axios from 'axios';

const App = () => {
  const [fact, setFact] = useState('');

  const fetchCatFact = async () => {
    try {
      const response = await axios.get('https://catfact.ninja/fact');
      setFact(response.data.fact);
    } catch (error) {
      console.error('Error fetching the cat fact:', error);
      setFact('Could not fetch a cat fact. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.factText}>{fact}</Text>
        <Button title="Get Cat Fact" onPress={fetchCatFact} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  factText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;
