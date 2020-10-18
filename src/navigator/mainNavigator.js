import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen8147315Navigator from '../features/BlankScreen8147315/navigator';
import BlankScreen7147314Navigator from '../features/BlankScreen7147314/navigator';
import SignUp21147128Navigator from '../features/SignUp21147128/navigator';
import SignIn22147127Navigator from '../features/SignIn22147127/navigator';
import UserProfile3147126Navigator from '../features/UserProfile3147126/navigator';
import ArticleList4147125Navigator from '../features/ArticleList4147125/navigator';
import Maps6147123Navigator from '../features/Maps6147123/navigator';
import BlankScreen0147120Navigator from '../features/BlankScreen0147120/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen8147315: { screen: BlankScreen8147315Navigator },
BlankScreen7147314: { screen: BlankScreen7147314Navigator },
SignUp21147128: { screen: SignUp21147128Navigator },
SignIn22147127: { screen: SignIn22147127Navigator },
UserProfile3147126: { screen: UserProfile3147126Navigator },
ArticleList4147125: { screen: ArticleList4147125Navigator },
Maps6147123: { screen: Maps6147123Navigator },
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
