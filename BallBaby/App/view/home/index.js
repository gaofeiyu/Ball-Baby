'use strict';

var React = require('react-native');
var {
    View,
    Text,
    StyleSheet
    } = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column',
  },
});

var Content = React.createClass({
  render: function() {
    return (
        <View style={styles.container}>
          <Text>撸码中...</Text>
        </View>
    );
  }
});

module.exports = Content;