/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import ToDo from './app/screens/Todo';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ToDo);
