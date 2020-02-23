import React, {PureComponent} from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import RecievedMessage from './items/RecievedMessage';
import SentMessage from './items/SentMessage';
import {COLOR} from '../../utils/resources';

const initialLayout = {width: Dimensions.get('window').width};

export default class Message extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      routes: [
        {key: '1', title: 'TIN ĐẾN'},
        {key: '2', title: 'TIN ĐI'},
      ],
    };
  }
  setIndex = index => {
    this.setState({index});
  };

  renderScene = SceneMap({
    1: RecievedMessage,
    2: SentMessage,
  });

  renderTabBar = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{backgroundColor: COLOR.main_color}}
        style={{backgroundColor: COLOR.white}}
        activeColor={COLOR.black}
        inactiveColor={COLOR.grey_500}
      />
    );
  };
  render() {
    return (
      <TabView
        renderTabBar={this.renderTabBar}
        navigationState={this.state}
        renderScene={this.renderScene}
        onIndexChange={this.setIndex}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
