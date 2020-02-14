import React, {PureComponent} from 'react';
import {View, Dimensions, Platform} from 'react-native';
import Spinner from 'react-native-spinkit';
import {COLOR} from '../utils/resource';

const {width} = Dimensions.get('window');

class Loading extends PureComponent {
  render() {
    const {style, color, sizeSpinner} = this.props;
    const isAndroid = Platform.OS === 'android';
    const loadingType = isAndroid ? 'Wave' : 'Circle';
    const size = isAndroid ? 36 : 24;
    return (
      <View
        style={[
          {
            width,
            backgroundColor: COLOR.TRANSPARENT,
            justifyContent: 'center',
            alignItems: 'center',
          },
          style,
        ]}>
        <Spinner
          size={sizeSpinner || size}
          type={loadingType}
          color={color || COLOR.blue_light_3}
        />
      </View>
    );
  }
}
export {Loading};
