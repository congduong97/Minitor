import React, {PureComponent} from 'react';
import {Animated, StyleSheet} from 'react-native';
import {COLOR, SIZE} from '../utils';
import {AppText} from './AppText';

class Toast extends PureComponent {
  constructor(props) {
    super(props);
    this.animateOpacityValue = new Animated.Value(0);
    this.state = {
      ShowToast: false,
    };
    this.ToastMessage = '';
  }

  componentDidMount() {
    const {onRef} = this.props;
    if (onRef) {
      onRef(this);
    }
  }

  componentWillUnmount() {
    this.timerID && clearTimeout(this.timerID);
  }

  clear = () => {
    this.timerID && clearTimeout(this.timerID);
  };

  ShowToastFunction = (
    message = 'Custom React Native Toast',
    duration = 3000,
  ) => {
    this.ToastMessage = message;
    this.setState({ShowToast: true}, () => {
      Animated.timing(this.animateOpacityValue, {
        toValue: 1,
        duration: 500,
      }).start(this.HideToastFunction(duration));
    });
  };

  HideToastFunction = (duration) => {
    this.timerID = setTimeout(() => {
      Animated.timing(this.animateOpacityValue, {
        toValue: 0,
        duration: 500,
      }).start(() => {
        this.setState({ShowToast: false});
        clearTimeout(this.timerID);
      });
    }, duration);
  };

  render() {
    if (this.state.ShowToast) {
      return (
        <Animated.View
          style={[
            styles.animatedToastView,
            {
              opacity: this.animateOpacityValue,
              top: this.props.position == 'top' ? '15%' : '83%',
              backgroundColor: this.props.backgroundColor || COLOR.main_color,
              alignSelf: 'center',
            },
          ]}>
          <AppText
            style={[
              styles.ToastBoxInsideText,
              {color: this.props.textColor || COLOR.white},
            ]}>
            {this.ToastMessage}
          </AppText>
        </Animated.View>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  animatedToastView: {
    marginHorizontal: SIZE.padding * 2,
    paddingHorizontal: SIZE.padding,
    paddingVertical: SIZE.padding / 2,
    borderRadius: SIZE.border_radius * 6,
    zIndex: 9999,
    position: 'absolute',
    justifyContent: 'center',
  },
  ToastBoxInsideText: {
    fontSize: SIZE.H5,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
});

export {Toast};
