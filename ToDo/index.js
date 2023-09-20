/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import ToDo from './app/screens/TodoList';

AppRegistry.registerComponent(appName, () => ToDo);
