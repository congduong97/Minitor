import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import RootNavigator from './src/navigators/RootNavigator';

enableScreens();
class App extends PureComponent {
  render() {
    return <RootNavigator />;
  }
}

export default App;
``;
