import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export class StudentItem extends Component {
  render() {
    const {name, active} = this.props;
    return (
      <View>
        <Image />
        <View>
          <Text></Text>
        </View>
      </View>
    );
  }
}

export default StudentItem;
