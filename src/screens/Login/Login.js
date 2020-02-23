import React, {PureComponent} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {SIZE, COLOR} from '../../utils/resources';
import Spinner from 'react-native-spinkit';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class Login extends PureComponent {
  state = {
    focusInput: false,
    loading: false,
  };

  onPressLogin = () => {
    this.setState({loading: true});
    const {navigation} = this.props;
    navigation.navigate('Home', {screen: 'Message'});
    this.setState({loading: false});
  };

  onPressSignUp = () => {};

  render() {
    const {loading} = this.state;
    return (
      <KeyboardAwareScrollView enableOnAndroid={true}>
        <View style={styles.container}>
          <View style={styles.inputWraper}>
            <Text style={styles.label}>Số điện thoại</Text>
            <TextInput style={styles.input} keyboardType={'numeric'} />
          </View>
          <View style={styles.inputWraper}>
            <Text style={styles.label}>Mật khẩu</Text>
            <TextInput style={styles.input} secureTextEntry={true} />
          </View>
          <TouchableOpacity
            onPress={this.onPressLogin}
            style={{
              backgroundColor: COLOR.main_color,
              borderRadius: 32,
              width: SIZE.width(100, 32),
              paddingVertical: 12,
              marginBottom: SIZE.padding * 2,
              alignItems: 'center',
            }}>
            {loading ? (
              <Spinner size={SIZE.H3} type={'Circle'} color={COLOR.white} />
            ) : (
              <Text
                style={{
                  color: COLOR.white,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Đăng nhập
              </Text>
            )}
          </TouchableOpacity>
          <View
            style={{
              marginBottom: SIZE.padding * 2,
              width: SIZE.width(100, 32),
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: COLOR.BG_TRANSPARENT_30,
                height: 1,
                width: SIZE.width(100, 32) * 0.4,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                fontSize: SIZE.H4,
                color: COLOR.BG_TRANSPARENT_30,
                width: SIZE.width(100, 32) * 0.2,
                textAlign: 'center',
              }}>
              OR
            </Text>
            <View
              style={{
                backgroundColor: COLOR.BG_TRANSPARENT_30,
                height: 1,
                width: SIZE.width(100, 32) * 0.4,
                alignSelf: 'center',
              }}
            />
          </View>
          <TouchableOpacity
            onPress={this.onPressSignUp}
            style={{
              borderColor: COLOR.main_color,
              borderWidth: 2,
              borderRadius: 32,
              width: SIZE.width(100, 32),
              paddingVertical: 12,
            }}>
            <Text
              style={{
                color: COLOR.main_color,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: SIZE.device_width / 2,
    paddingHorizontal: SIZE.padding,
  },
  inputWraper: {
    width: SIZE.width(100, 32),
    marginBottom: SIZE.padding * 2,
  },
  label: {
    color: COLOR.main_color,
    fontSize: SIZE.H4,
  },
  input: {
    width: SIZE.width(100, 32),
    borderBottomColor: COLOR.BG_TRANSPARENT_30,
    borderBottomWidth: 1,
    padding: 0,
    paddingTop: 8,
    fontSize: SIZE.H3,
  },
});
