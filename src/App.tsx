import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';
import axios from 'axios';
import {useCatFact} from './useCatFact';

const App = () => {
  const {fact, fetchCatFact} = useCatFact();

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
