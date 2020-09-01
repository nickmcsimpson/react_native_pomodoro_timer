import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Count from './utils/Count.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Count length={400}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
