import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';

enableScreens();
class App extends PureComponent {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default App;
