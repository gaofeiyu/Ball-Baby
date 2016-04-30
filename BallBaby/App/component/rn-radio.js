'use strict';

var React = require('react-native');
var {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    } = React;
var styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    borderWidth:1,
    borderColor:"#dedede",
    borderRadius:3,
    margin: 5,
  },
  listItem:{
    flex:1,
    height: 40,
    flexDirection:'row',
    alignItems:'center',
  },
  listItemSelect:{
    flex:1,
    height: 40,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:"#dedede",

  },
  listItemTxt: {
    flex:1,
    flexDirection:'row',
    fontSize: 18,
    textAlign:'center',
  }
});
var RnRadio = React.createClass({
  getInitialState: function(){
    return {}
  },

  render: function(){
    var self = this;

    return (
        <View
            style={styles.container}>
          {self.props.data.map(function(data){


            var selectStyle = styles.listItem;
            if(self.props.value == data.value){
              selectStyle =  styles.listItemSelect;
            }
            return <TouchableHighlight
                key={data.value}
                style={selectStyle}
                onPress={() => self.props.onSelectNode(data)}
                underlayColor={'#eeeeee'}>
              <Text style={styles.listItemTxt}>{data.name}</Text>
            </TouchableHighlight>;
          })}
        </View>
    );
  }
});

module.exports = RnRadio;