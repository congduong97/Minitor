import React from 'react';
import {Text} from 'react-native';

const AppText = (props) => {
  const {children, style, onPress} = props;
  return (
    <Text
      {...props}
      style={[{fontFamily: 'MotoyaLMaru'}, style]}
      onPress={onPress}>
      {children}
    </Text>
  );
};

export {AppText};
