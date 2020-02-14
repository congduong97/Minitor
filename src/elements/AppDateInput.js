import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import DatePicker from 'react-native-datepicker';

import {SIZE, COLOR, STRINGS} from '../utils';
import {AppIcon} from './AppIcon';
import {HomeICONS} from '../screens/Home/utils/icons';

const width = SIZE.device_width;

export default class AppDateInput extends Component {
  constructor(props) {
    super(props);
    const {value} = this.props;
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
    };
  }

  onChangeData = (value) => {
    const {onChangeData, validate, onError} = this.props;
    if (onChangeData) {
      onChangeData(value);
    }
    if (validate) {
      const {status, content} = validate();
      this.setState({status, content});

      if (onError) {
        onError(!status);
      }
    }
    this.setState({value});
  };
  setValue = (value) => {
    this.setState({value});
  };

  render() {
    const {
      inputStyle,
      placeholderTextColor,
      placeholder,
      style,
      noIcon,
    } = this.props;
    const {value} = this.state;
    const icon = {
      icon: HomeICONS.AntDesign_caretdown,
      type: 'AntDesign',
      iconColor: COLOR.black,
      iconSize: SIZE.H5,
    };
    return (
      <View
        style={[
          {
            width: '100%',
            borderRadius: SIZE.border_radius,
            borderColor: COLOR.grey_300,
            borderWidth: StyleSheet.hairlineWidth,
          },
          style,
        ]}>
        <TextInput
          editable={false}
          style={[
            {
              fontSize: SIZE.H5,
              color: COLOR.black,
            },
            inputStyle,
          ]}
          value={value}
          placeholderTextColor={placeholderTextColor || COLOR.grey_300}
          placeholder={placeholder || 'YYYY-MM-DD'}
        />
        {!noIcon && (
          <AppIcon
            style={{
              position: 'absolute',
              top: SIZE.padding / 1.4,
              right: SIZE.padding / 2,
            }}
            {...icon}
          />
        )}

        <DatePicker
          disabled={false}
          style={{
            position: 'absolute',
            width,
            height: 56,
            backgroundColor: COLOR.TRANSPARENT,
          }}
          date={new Date()}
          mode={'date'}
          androidMode={'spinner'}
          placeholder={STRINGS.Date_of_birth}
          format={'YYYY/MM/DD'}
          showIcon={false}
          customStyles={{
            btnTextConfirm: {
              color: COLOR.grey_800,
              height: 40,
              lineHeight: 40,
            },
            btnTextCancel: {color: COLOR.grey_800, height: 40, lineHeight: 40},
          }}
          hideText
          confirmBtnText={STRINGS.Confirm}
          cancelBtnText={STRINGS.Cancel}
          onDateChange={(date) => {
            this.onChangeData(date);
          }}
        />
      </View>
    );
  }
}
