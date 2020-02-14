import React, {PureComponent} from 'react';
import {StyleSheet} from 'react-native';

import {TouchableCo, Loading} from '../elements';
import {COLOR, SIZE} from '../utils/resource';
import {AppText} from './AppText';

class AppTextButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {loading: false};
  }
  componentDidMount() {
    const {onRef} = this.props;
    if (onRef) {
      onRef(this);
    }
  }
  onPress = () => {
    const {onPress} = this.props;
    const {loading} = this.state;
    if (loading) {
      return;
    }
    if (onPress) {
      onPress();
    }
  };
  getLoadingValue = () => this.state.loading;
  setLoadingValue = (loading) => {
    this.setState({loading});
  };

  renderContent = () => {
    const {title, textStyle, disabled, colorSpinner, sizeSpinner} = this.props;
    const {loading} = this.state;

    const styleDisabled = disabled ? styles.textDisabled : undefined;
    if (loading) {
      return (
        <Loading
          style={{width: undefined}}
          color={colorSpinner}
          sizeSpinner={sizeSpinner}
        />
      );
    }
    return (
      <AppText
        style={[
          {color: COLOR.blue_light_3, fontSize: SIZE.header_font_size},
          textStyle,
          styleDisabled,
        ]}>
        {title}
      </AppText>
    );
  };
  render() {
    const {style, disabled} = this.props;
    const disabledStyle = disabled ? styles.touchDisabled : undefined;
    return (
      <TouchableCo
        onPress={this.onPress}
        disabled={disabled}
        style={[
          {
            padding: SIZE.padding / 2,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          },
          style,
          disabledStyle,
        ]}>
        {this.renderContent()}
      </TouchableCo>
    );
  }
}

const styles = StyleSheet.create({
  touchDisabled: {
    borderColor: COLOR.grey_500,
    backgroundColor: COLOR.grey_500,
  },
  textDisabled: {
    color: COLOR.white,
  },
});

export {AppTextButton};
