'use strict';

var React = require('react-native');
var global = require('../../util/global');
var Util = require('../../util/util');
var Service = require('../../util/service');
var {
    View,
    Text,
    ScrollView,
    Picker,
    PickerIOS,
    ListView,
    Switch,
    TouchableHighlight,
    TextInput,
    StyleSheet,
    } = React;
var layoutStyle = require('../../style/layout');
var styles = StyleSheet.create(layoutStyle);

var RnRadio = require("../../component/rn-radio");

var AddUser = React.createClass({
  getInitialState: function () {
    return {
      name: '',
      expertRule: '1',
      description: '',
    }
  },
  onSelectNode: function (data) {
    this.setState({sex: data.value});
  },
  render: function () {
    const expertRules = global.football.expertRules;


    return (
      //Todo 队长设置/添加好友到队伍/搜索其他用户到队伍
        <ScrollView style={styles.scrollContainer}
                    keyboardDismissMode='interactive'>
          <TextInput
              style={styles.inputItemBase}
              onChangeText={(name) => {this.setState({name})}}
              placeholder="请填写球队名称"
          />
          <View
              style={[styles.listItem,styles.heightAuto]}>
            <Text style={styles.inputLabelName}>请选择球队擅长的赛制</Text>
            <PickerIOS
                itemStyle={{height:80,fontSize: 18, color: 'green', textAlign: 'left', fontWeight: 'bold'}}
                selectedValue={this.state.expertRule}
                onValueChange={(expertRule) => this.setState({expertRule})}>
              {expertRules.map((data) => (
                  <PickerIOS.Item
                      key={data.value}
                      value={data.value}
                      label={data.name}
                  />
              ))}
            </PickerIOS>
          </View>
          <TextInput
              style={[styles.inputItemBase,styles.textareaItem]}
              onPress={this._onPress}
              multiline={true}
              onChangeText={(description) => {this.setState({description})}}
              placeholder="请填写球队说明"
          />
          <TouchableHighlight
              underlayColor={'#eeeeee'}
              onPress={() => this.submit()} style={styles.listItem}>
            <Text style={styles.buttonSubmit}>提交</Text>
          </TouchableHighlight>
        </ScrollView>
    );
  },
  submit: function () {
    var url = Service.host + Service.createUser;
    Util.post(url,this.state,function(data){
      console.log(data);
    })
  },

  _onPress: function (event:Event) {
    if (this.props.editable || this.props.editable === undefined) {
      this.focus();
    }
  },

});



module.exports = AddUser;