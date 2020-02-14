import React, {PureComponent} from 'react';
import {View, Dimensions, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {ICONS, COLOR, STRINGS, SIZE} from '../utils';
import {AppIcon} from './AppIcon';
import {TouchableCo} from './TouchableCo';

const {width} = Dimensions.get('window');

class ErrorView extends PureComponent {
  renderIcon = () => {
    const {icon, networkError} = this.props;
    if (networkError) {
      return (
        <Feather
          name={ICONS.Feather_wifi_off}
          size={50}
          color={COLOR.main_color}
        />
      );
    }
    if (icon && icon.name) {
      const {name, type} = icon;
      return (
        <AppIcon
          icon={name || ICONS.Ionicons_ios_refresh}
          type={type}
          iconSize={SIZE.H1}
          iconColor={COLOR.main_color}
        />
      );
    }
    return null;
  };
  renderTitle = () => {
    const {title, networkError} = this.props;

    if (networkError) {
      return (
        <Text style={{color: COLOR.main_color, fontSize: SIZE.H5}}>
          {STRINGS.network_error}
        </Text>
      );
    }
    return (
      <Text style={{color: COLOR.main_color, fontSize: SIZE.H5}}>
        {title || STRINGS.server_error}
      </Text>
    );
  };
  render() {
    const {style, onPress} = this.props;
    return (
      <TouchableCo onPress={onPress}>
        <View
          style={[
            {
              height: SIZE.height(70),
              width,
              backgroundColor: COLOR.TRANSPARENT,
              justifyContent: 'center',
              alignItems: 'center',
            },
            style,
          ]}>
          {this.renderIcon()}
          {this.renderTitle()}
        </View>
      </TouchableCo>
    );
  }
}
export {ErrorView};
