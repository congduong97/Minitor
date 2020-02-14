import React, {PureComponent, Fragment} from 'react';
import {View} from 'react-native';

import {TouchableCo, Loading, AppImage} from '../elements';
import {COLOR, SIZE} from '../utils/resource';
import {AppText} from './AppText';

class AppImageWithTextButton extends PureComponent {
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
  setLoadingValue = (loading) => {
    this.setState({loading});
  };
  getLoadingValue = () => this.state.loading;

  renderContent = () => {
    const {title, style, textStyle, source} = this.props;
    const {loading} = this.state;
    if (loading) {
      return (
        <Loading
          sizeSpinner={SIZE.header_font_size}
          style={[{width: undefined}, style]}
          color={COLOR.white}
        />
      );
    }

    return (
      <Fragment>
        {!!source && (
          <AppImage source={source} style={{width: 42, height: 42}} />
        )}
        {!!title && (
          <AppText
            style={{
              fontSize: SIZE.H6,
              color: COLOR.white,
              textAlign: 'center',
              ...textStyle,
            }}>
            {title}
          </AppText>
        )}
      </Fragment>
    );
  };
  render() {
    const {style, hitSlop} = this.props;
    const {loading} = this.state;
    return (
      <TouchableCo onPress={this.onPress} disabled={loading} hitSlop={hitSlop}>
        <View
          style={[
            {
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            },
            style,
          ]}>
          {this.renderContent()}
        </View>
      </TouchableCo>
    );
  }
}

export {AppImageWithTextButton};
