import React from 'react';
import {TouchableOpacity, Platform} from 'react-native';

/**
 *
 * @param {*} loading return loading view when component load data or fetch api
 */
const TouchableCo = (props) => {
  const {
    children,
    touchStyle,
    style,
    onPress,
    disable,
    disabled,
    onLongPress,
  } = props;
  if (Platform.OS === 'ios') {
    return (
      <TouchableOpacity
        {...props}
        activeOpacity={0.8}
        disabled={disable || disabled}
        onPress={onPress}
        style={[styles.touch, touchStyle || style]}
        onLongPress={onLongPress}>
        {children}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      {...props}
      disabled={disable || disabled}
      onPress={onPress}
      style={[styles.touch, touchStyle || style]}
      onLongPress={onLongPress}>
      {children}
    </TouchableOpacity>
  );
};
const styles = {
  touch: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
};
export {TouchableCo};
