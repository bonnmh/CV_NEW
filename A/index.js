/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Login from './ComponentLogin/Login.js' ;
import KinhNghiem from './src/KinhNghiem.js' ;
import KyNangSoTruong from './KyNangSoTruong.js' ;

AppRegistry.registerComponent(appName, () => Login);
