import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export class RecievedMessage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Sent mesage </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RecievedMessage;
