import React, {Component} from 'react';
import {View} from 'react-native';

import {SIZE, COLOR, STYLE} from '../utils';
import {AppIcon} from './AppIcon';
import {TouchableCo} from './TouchableCo';

export default class AppCheckBox extends Component {
  constructor(props) {
    super(props);
    const {value} = props;
    this.state = {
      value: value || false,
    };
  }

  componentDidMount() {
    const {onRef} = this.props;
    onRef && onRef(this);
  }

  onChangeData = () => {
    const {value} = this.state;
    const {onChangeData} = this.props;
    if (onChangeData) {
      onChangeData(!value);
    }

    this.setState({value: !value});
  };
  setValue = (value) => {
    this.setState({value});
  };

  render() {
    const {style, size} = this.props;
    const {value} = this.state;

    const checkBoxSize = {
      width: size || SIZE.icon_size_ionicons,
      height: size || SIZE.icon_size_ionicons,
    };

    return (
      <TouchableCo onPress={this.onChangeData}>
        <View
          style={[
            STYLE.center,
            {backgroundColor: value ? COLOR.greenLight_5 : COLOR.grey_300},
            style,
            checkBoxSize,
          ]}>
          {value && (
            <AppIcon
              type={'MaterialIcons'}
              icon={'done'}
              iconColor={COLOR.white}
              iconSize={
                size ? (size * 2) / 3 : (SIZE.icon_size_ionicons / 3) * 2
              }
            />
          )}
        </View>
      </TouchableCo>
    );
  }
}
