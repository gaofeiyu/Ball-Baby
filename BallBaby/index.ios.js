/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Component,
    TabBarIOS,
    NavigatorIOS,
    } = React;

var BallBaby = React.createClass({
  getInitialState: function () {
    return {
      selectedTab: 'demos'
      //selectedTab: 'manage'
    };
  },
  render: function () {
    return (

          <TabBarIOS selectedTab={this.state.selectedTab}>
            <TabBarIOS.Item accessibilityLabel={"Demos"}
                            selected={this.state.selectedTab === 'demos'}
                            title="示例列表"
                            name="demos"
                            icon={{uri: 'icon.png', isStatic: true}}
                            onPress={() => {
                      this.setState({
                        selectedTab: 'demos'
                      });
                  }}>
              <NavigatorIOS style={Style.container}
                            tintColor={'#333344'}
                            initialRoute={{
                        title: '示例列表',
                        component: require('./App/view/demos/index')
                      }}
                            itemWrapperStyle={Style.navigator} />
            </TabBarIOS.Item>

            <TabBarIOS.Item accessibilityLabel={"Manage"}
                            selected={this.state.selectedTab === 'manage'}
                            title="管理"
                            name="nodes"
                            icon={{uri:'nodes.png'}}
                            onPress={() => {
                      this.setState({
                        selectedTab: 'manage'
                      });
                  }}>

              <NavigatorIOS style={Style.container}
                            tintColor={'#333344'}
                            initialRoute={{
                        title: '管理',
                        component: require('./App/view/manage/index')
                      }}
                            itemWrapperStyle={Style.navigator} />

            </TabBarIOS.Item>

            <TabBarIOS.Item accessibilityLabel={"About"}
                            selected={this.state.selectedTab === 'about'}
                            title="关于"
                            name="about"
                            icon={{uri: 'reactnative_logo.png'}}
                            onPress={() => {
                      this.setState({
                        selectedTab: 'about'
                      });
                  }}>

              <NavigatorIOS style={Style.container}
                            tintColor={'#333344'}
                            initialRoute={{
                        title: 'About',
                        component: require('./App/view/others/about')
                      }}
                            itemWrapperStyle={Style.navigator} />

            </TabBarIOS.Item>
          </TabBarIOS>
    );
  }
});

var Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7EAEC'
  },
  navigator: {
    backgroundColor: '#E7EAEC'
  }
});

AppRegistry.registerComponent('BallBaby', () => BallBaby);

