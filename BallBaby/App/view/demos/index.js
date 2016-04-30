'use strict';
var React = require('react-native');
var {
    View,
    Text,
    ScrollView,
    TouchableHighlight,
    StyleSheet,
    } = React;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //marginTop: 64,
    //flexDirection: 'column',
  },
  listItem:{
    flex: 1,
    margin: 5,
    padding:10,
    borderWidth: 1,
    borderColor: '#d5d5d5'
  },
  listItemTxt:{
    fontSize: 18,
  }
});
var Content = React.createClass({
  render: function() {
    return (
        <ScrollView style={[styles.container]}>
          <TouchableHighlight
              underlayColor={'#eeeeee'}
              onPress={() => this.jumpDemo('FlexLayout','./layout',{data:{a:1}})} style={styles.listItem}>
            <Text style={styles.listItemTxt}>FlexLayout</Text>
          </TouchableHighlight>
          <TouchableHighlight
              underlayColor={'#eeeeee'}
              onPress={() => this.jumpDemo('DatePicker','./datepicker',{data:{a:1}})} style={styles.listItem}>
            <Text style={styles.listItemTxt}>DatePicker</Text>
          </TouchableHighlight>
        </ScrollView>
    );
  },
  jumpDemo: function(title,pageName,options){
    var pageComp = null;
    switch(pageName){
      case './layout':
        pageComp = require('./layout');
        break;
      case './datepicker':
        pageComp = require('./datepicker');
        break;
    }
    this.props.navigator.push({
      title: title,
      component:pageComp,
      passProps: options
    });
  }

});

module.exports = Content;