'use strict';

var React = require('react-native');
var {
    StyleSheet,
    View,
    DatePickerIOS,
    TouchableOpacity,
    TouchableHighlight,
    Navigator,
    Dimensions,
    ScrollView,
    Text,
    } = React;

var DateTimePicker = require('../../component/date-picker.js');

var layoutStyle = require('../../style/layout');
var styles = StyleSheet.create(layoutStyle);

module.exports = React.createClass({
  getInitialState() {
    return {
      date: new Date(),
    }
  },
  showDatePicker() {
    var date = this.state.date;
    this.picker.showDatePicker(date, (d)=>{
      this.setState({date:d});
    });
  },
  showTimePicker() {
    var date = this.state.date;
    this.picker.showTimePicker(date, (d)=>{
      this.setState({date:d});
    });
  },
  render() {
    return (
        <ScrollView style={styles.container}>
          <TouchableHighlight
              underlayColor={'#eeeeee'}
              onPress={this.showDatePicker}
              style={styles.listItem}>
            <Text style={styles.listItemTxt}>showDatePicker</Text>
          </TouchableHighlight>
          <TouchableHighlight
              underlayColor={'#eeeeee'}
              onPress={this.showTimePicker}
              style={styles.listItem}>
            <Text style={styles.listItemTxt}>showTimePicker</Text>
          </TouchableHighlight>

          <View
              style={[styles.listItem,styles.heightAuto]}>
            <Text style={styles.inputLabelName}>Result</Text>
            <Text style={{textAlign: 'center'}}>
              {this.state.date.toString()}
            </Text>
          </View>

          <DateTimePicker ref={(picker)=>{this.picker=picker}}/>
        </ScrollView>
    );
  },
});