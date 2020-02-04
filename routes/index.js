/**
 * 页面跳转路由配置
 * Hsl By 20200129
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../pages/home';
import Demo from '../pages/demo';

const MainNavigator = createStackNavigator({
  Home,
  Demo,
});
const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;
