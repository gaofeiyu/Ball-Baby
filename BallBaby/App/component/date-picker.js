'use strict';

var React = require('react-native');
var {
    StyleSheet,
    View,
    DatePickerIOS,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions,
    Text,
    } = React;

var Overlay = require('./overlay.js');

var DateTimePicker =  React.createClass({
  getInitialState() {
    return {
      visible: false,
      mode: 'date',
      date: new Date(),
    };
  },
  showDatePicker(date, callback) {
    this.callback = callback;
    date = date || new Date();
    this.setState({
      mode: 'date',
      visible: true,
      date: date,
    });
  },
  showTimePicker(date, callback) {
    console.log('showTimePicker');
    this.callback = callback;
    date = date || new Date();

    this.setState({
      mode: 'time',
      visible: true,
      date: date,
    });
  },
  onClose() {
    this.setState({
      visible: false,
    });
  },
  onComplete() {
    this.setState({
      visible: false,
    });
    this.callback(this.state.date);
  },
  onDateChange(date) {
    this.setState({date: date});
  },
  render() {
    // Warn issues for http://stackoverflow.com/questions/35764088/prop-issues-with-datepickerios-in-react-native
    return this.state.visible && (
            <Overlay visible={this.state.visible}>
              <View style={styles.actionSheetContainer}>
                <TouchableOpacity
                    style={styles.touchableOpacity}
                    activeOpacity={1}
                    onPress={this.onClose} />
                <TouchableHighlight
                    onPress={this.onComplete}
                    underlayColor="#f4f7f7"
                    style={styles.button}>
                  <Text style={styles.buttonText}>完成</Text>
                </TouchableHighlight>
                <View style={styles.separator}/>
                <DatePickerIOS
                    date={this.state.date}
                    mode={this.state.mode}
                    onDateChange={this.onDateChange}
                    style = {styles.datePicker}
                />
              </View>
            </Overlay>
        );
  },
});


var styles = StyleSheet.create({
  actionSheetContainer: {
    height: Dimensions.get('window').height-114,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  datePicker: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  touchableOpacity: {
    flex: 1,
  },
  button: {
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  buttonText: {
    color: '#295bac',
    fontSize: 20,
    textAlign: 'center'
  },
  separator: {
    height: 1,
    backgroundColor: '#CCC'
  },
});

module.exports = DateTimePicker;