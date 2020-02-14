import React, {PureComponent} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {SIZE, COLOR} from '../utils/resource';

class AppContainer extends PureComponent {
  render() {
    const {children, style, forceInset} = this.props;
    return (
      <SafeAreaView
        forceInset={{top: 'never', bottom: 'never', ...forceInset}}
        style={[styles.container, style]}>
        <StatusBar barStyle={'dark-content'} />
        {children}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // height: SIZE.device_height,
    flex: 1,
    width: SIZE.device_width,
    backgroundColor: COLOR.white,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
export {AppContainer};
