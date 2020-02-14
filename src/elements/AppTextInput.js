import React, {PureComponent} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

import {SIZE, COLOR, isIos} from '../utils';
import {AppIcon} from './AppIcon';
import {AppIconButton} from './AppIconButton';
import {HomeICONS} from '../screens/Home/utils/icons';
import InputStatus from './InputStatus';

export default class AppTextInput extends PureComponent {
  constructor(props) {
    super(props);
    const {value, secureTextEntry} = this.props;
    let valueText = '';
    let status = true;
    if (props.value) {
      valueText = props.value.toString();
      status = !!value;
    }

    this.state = {
      status,
      content: '',
      value: valueText,
      showPass: secureTextEntry,
    };
    this.input = React.createRef();
  }

  onChangeData = (value) => {
    const {onChangeData, validate, onValid} = this.props;
    if (onChangeData) {
      onChangeData(value);
    }
    if (validate) {
      const {status, content} = validate();
      this.state.status = status;
      this.state.content = content;
      if (onValid) {
        onValid(status);
      }
    }
    this.setState({value});
  };
  getValue = () => {
    return this.state.value;
  };
  validate = (status, content, onValid) => {
    this.setState({status, content});
    if (onValid) {
      onValid(status);
    }
  };
  setValue = (value) => {
    this.setState({value});
  };
  getInput = () => {
    return this.input;
  };
  getValue = () => {
    return this.state.value;
  };

  onPressShowPassword = () => {
    this.setState({showPass: !this.state.showPass});
  };
  render() {
    const {
      multiline,
      editable,
      onBlur,
      keyboardType,
      autoCapitalize,
      secureTextEntry,
      inputStyle,
      placeholderTextColor,
      placeholder,
      style,
      useIcon,
      icon,
      iconSize,
      type,
      iconColor,
      noWarning,
      onSubmitEditing,
    } = this.props;
    const {value, showPass, status, content} = this.state;
    return (
      <View
        style={[
          {
            width: '100%',
            borderRadius: SIZE.border_radius,
            borderColor: COLOR.grey_300,
            borderWidth: StyleSheet.hairlineWidth,
            justifyContent: 'center',
          },
          style,
        ]}>
        <TextInput
          {...this.props}
          ref={this.input}
          editable={editable}
          onBlur={onBlur}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize || 'none'}
          secureTextEntry={showPass}
          style={[
            {
              fontSize: SIZE.H5,
              color: COLOR.black,
              padding: SIZE.padding,
              paddingRight: SIZE.padding * 2.5,
            },
            inputStyle,
          ]}
          multiline={multiline}
          value={value}
          onChangeText={this.onChangeData}
          placeholderTextColor={placeholderTextColor || COLOR.grey_300}
          placeholder={placeholder}
          onSubmitEditing={onSubmitEditing}
        />
        {!!useIcon && (
          <AppIcon
            icon={icon}
            iconSize={iconSize}
            type={type}
            iconColor={iconColor}
          />
        )}
        {!!secureTextEntry && (
          <AppIconButton
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={this.onPressShowPassword}
            style={{
              position: 'absolute',
              right: SIZE.padding / 2,
              top: isIos ? SIZE.padding / 3 : SIZE.padding / 1.5,
            }}
            icon={{
              iconName: showPass
                ? HomeICONS.Ionicons_ios_eye
                : HomeICONS.Ionicons_ios_eye_off,
              iconType: 'Ionicons',
              iconColor: COLOR.black,
              iconSize: SIZE.H3,
            }}
          />
        )}
        {!noWarning && (
          <InputStatus
            style={{paddingBottom: 2}}
            status={!status}
            content={content}
          />
        )}
      </View>
    );
  }
}
