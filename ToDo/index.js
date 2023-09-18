/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import ToDoList from './app/screens/TodoList';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ToDoList);
