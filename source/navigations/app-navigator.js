// @packages
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../containers/main-page';

const TabNavigatorConfig = {
    header: null,
    headerMode: 'none',
    initialRouteName: 'Home'
};

const RouteConfigs = {
    Home: {
        screen: HomeScreen
    }
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
