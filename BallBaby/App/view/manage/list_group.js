'use strict';

var React = require('react-native');
var global = require('../../util/global');
var Util = require('../../util/util');
var Service = require('../../util/service');
var {
    View,
    Text,
    ScrollView,
    ListView,
    TextInput,
    StyleSheet,
    } = React;
var layoutStyle = require('../../style/layout');
var styles = StyleSheet.create(layoutStyle);
var ListUser = React.createClass({
  getInitialState: function () {
    var url = Service.host + Service.getUser;
    Util.post(url, {key: Util.key}, function (data) {
      var user = data.data;
      this.setState({user});
    }.bind(this));
    return {
      user: [],
    }
  },
  render: function () {

    var view = [];
    var items = this.state.user || [];
    console.log('==== Render List ====');
    var colors = ['#E20079', '#FFD602', '#25BFFE', '#F90000', '#04E246', '#04E246', '#00AFC9'];
    var color = {
      backgroundColor: colors[parseInt(Math.random() * 7)]
    };
    items.forEach(function (data, index) {
      view.push(
          <View
              key={data.userid}
              style={[styles.listItem,styles.heightAuto]}>
            {(function (data) {
              var childList = [];
              for (var key in data) {
                if(key != 'userid' && key != 'token'){
                  childList.push(
                      <View
                          key={key + '-' + index}
                          style={[styles.boxBase,styles.borderBottom1,styles.listLineHeight]}>
                        <Text style={styles.boxBase}>{key}</Text>
                        <Text style={styles.listItemValue}>{data[key]}</Text>
                      </View>
                  )
                }
              }
              return childList;
            })(data)}
          </View>
      );
    })
    return (
        <ScrollView style={styles.scrollContainer}
                    keyboardDismissMode='interactive'>
          {view}
        </ScrollView>
    );
  },

});


module.exports = ListUser;