'use strict';

var React = require('react-native');
var {
    Text ,
    Image,
    View
    } = React;

var Style = React.StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left'
  },
});

var About = React.createClass({
  render: function() {
    return (
        <View style={Style.container}>
          <Text style={Style.txt}>
            这是个约球软件的小demo
          </Text>
        </View>

    );
  },
});

module.exports = About;