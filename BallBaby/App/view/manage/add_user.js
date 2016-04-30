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
      username: '',
      sex: '1',
      tel: '1',
      email: '1',
      place: '1',
      height: '',
      weight: '',
      description: '',
    }
  },
  onSelectNode: function (data) {
    this.setState({sex: data.value});
  },
  render: function () {
    const sexData = global.user.sex;
    const placeData = global.football.place;


    return (
        <ScrollView style={styles.scrollContainer}
                    keyboardDismissMode='interactive'>
          <TextInput
              style={styles.inputItemBase}
              onChangeText={(username) => {this.setState({username})}}
              placeholder="请填写用户名"
          />
          <TextInput
              style={styles.inputItemBase}
              onChangeText={(tel) => {this.setState({tel})}}
              placeholder="请填写电话号码"
          />
          <TextInput
              style={styles.inputItemBase}
              onChangeText={(email) => {this.setState({email})}}
              placeholder="请填写邮箱"
          />
          <RnRadio
              value={this.state.sex}
              onSelectNode={(data) => this.onSelectNode(data)}
              data={sexData}/>
          <View
              style={[styles.listItem,styles.heightAuto]}>
            <Text style={styles.inputLabelName}>请选择你的位置</Text>
            <PickerIOS
                itemStyle={{height:80,fontSize: 18, color: 'green', textAlign: 'left', fontWeight: 'bold'}}
                selectedValue={this.state.place}
                onValueChange={(place) => this.setState({place})}>
              {placeData.map((data) => (
                  <PickerIOS.Item
                      key={data.value}
                      value={data.value}
                      label={data.name}
                  />
              ))}
            </PickerIOS>
          </View>
          <View
              style={styles.boxBase}>
            <TextInput
                style={styles.inputItemBase}
                onChangeText={(height) => {this.setState({height})}}
                value={this.state.height}
                placeholder="请填写身高"
            />
            <View style={styles.listItemText}>
              <Text style={styles.listItemTxt}>CM</Text>
            </View>
          </View>
          <View
              style={styles.boxBase}>
            <TextInput
                style={styles.inputItemBase}
                onChangeText={(weight) => {this.setState({weight})}}
                value={this.state.weight}
                placeholder="请填写体重"
            />
            <View style={styles.listItemText}>
              <Text style={styles.listItemTxt}>KG</Text>
            </View>
          </View>
          <TextInput
              style={[styles.inputItemBase,styles.textareaItem]}
              onPress={this._onPress}
              multiline={true}
              onChangeText={(description) => {this.setState({description})}}
              placeholder="请填写个人说明"
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