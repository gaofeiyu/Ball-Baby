'use strict';

var React = require('react-native');
var {
    View,
    Text,
    ScrollView,
    TouchableHighlight,
    StyleSheet
    } = React;
var layoutStyle = require('../../style/layout');
var styles = StyleSheet.create(layoutStyle);

var Content = React.createClass({
  render: function() {
    return (
        <ScrollView style={styles.container}>
          <TouchableHighlight
              underlayColor={'#eeeeee'}
              onPress={() => this.jumpDemo('添加用户','./add_user')} style={styles.listItem}>
            <Text style={styles.listItemTxt}>添加用户</Text>
          </TouchableHighlight>
          <TouchableHighlight
              underlayColor={'#eeeeee'}
              onPress={() => this.jumpDemo('用户列表','./list_user')} style={styles.listItem}>
            <Text style={styles.listItemTxt}>用户列表</Text>
          </TouchableHighlight>
          <TouchableHighlight
              underlayColor={'#eeeeee'}
              onPress={() => this.jumpDemo('创建球队','./add_group')} style={styles.listItem}>
            <Text style={styles.listItemTxt}>创建球队</Text>
          </TouchableHighlight>
          <TouchableHighlight
              underlayColor={'#eeeeee'}
              onPress={() => this.jumpDemo('球队列表','./list_group')} style={styles.listItem}>
            <Text style={styles.listItemTxt}>球队列表</Text>
          </TouchableHighlight>
          <TouchableHighlight
              underlayColor={'#eeeeee'}
              onPress={() => this.jumpDemo('创建比赛','./add_match')} style={styles.listItem}>
            <Text style={styles.listItemTxt}>创建比赛</Text>
          </TouchableHighlight>
          <TouchableHighlight
              underlayColor={'#eeeeee'}
              onPress={() => this.jumpDemo('比赛列表','./list_match')} style={styles.listItem}>
            <Text style={styles.listItemTxt}>比赛列表</Text>
          </TouchableHighlight>
        </ScrollView>
    );
  },
  jumpDemo: function(title,pageName,options){
    var pageComp = null;
    switch(pageName){
      case './add_user':
        pageComp = require('./add_user');
        break;
      case './list_user':
        pageComp = require('./list_user');
        break;
      case './add_group':
        pageComp = require('./add_group');
        break;
      case './list_group':
        pageComp = require('./list_group');
        break;
      case './add_match':
        pageComp = require('./add_match');
        break;
      case './list_match':
        pageComp = require('./list_match');
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