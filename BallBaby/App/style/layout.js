var Util = require('../util/util');
var layoutStyle = {
  listCellHeight: {
    height: 40,
  },
  listLineHeight: {
    height: 30,
  },
  borderNone: {
    borderWidth: 0,
  },
  borderBottom1: {
    borderBottomWidth: Util.pixel,
    borderColor: '#c5c5c5',
  },
  boxBase:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
  },
  heightAuto: {
    height: undefined,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    backgroundColor: "#fff",
  },
  listContainer: {
    flex: 1
  },
  listItem: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderWidth: Util.pixel,
    borderColor: '#c5c5c5'
  },
  inputItemBase: {
    flex: 1,
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    fontSize: 14,
    borderWidth: Util.pixel,
    borderColor: '#c5c5c5'
  },
  inputLabelName: {
    fontSize: 14,
    color: "#999"
  },
  textareaItem: {
    height: 160,
  },
  inputItemPicker: {
    flex: 1,
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
    height: 60,
    overflow: 'hidden',
    borderWidth: Util.pixel,
    borderColor: '#c5c5c5',
    justifyContent: 'center'
  },
  listItemText: {
    flex: 1,
  },
  listItemValue: {
    flex: 2,
  },
  listItemTxt: {
    fontSize: 18,
  },
  buttonSubmit:{
    fontSize: 18,
    textAlign:'center',
  },

};

module.exports = layoutStyle;