import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import StudentItem from './StudentItem';

export class RouteItem extends Component {
  state = {
    showListStudent: false,
  };

  renderItem = ({item}) => {
    <StudentItem data={item} />;
  };

  render() {
    const {routeName, student} = props;
    const {showListStudent} = this.state;
    return (
      <View>
        <Text style={styles.routeName}>{routeName}</Text>
        <FlatList
          data={student}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  routeName: {},
});

export default RouteItem;
