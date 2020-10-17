import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile3147126Navigator from '../features/UserProfile3147126/navigator';
import ArticleList4147125Navigator from '../features/ArticleList4147125/navigator';
import Maps6147123Navigator from '../features/Maps6147123/navigator';
import BlankScreen1147121Navigator from '../features/BlankScreen1147121/navigator';
import BlankScreen0147120Navigator from '../features/BlankScreen0147120/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile3147126: { screen: UserProfile3147126Navigator },
ArticleList4147125: { screen: ArticleList4147125Navigator },
Maps6147123: { screen: Maps6147123Navigator },
BlankScreen1147121: { screen: BlankScreen1147121Navigator },
BlankScreen0147120: { screen: BlankScreen0147120Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
