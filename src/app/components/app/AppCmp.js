import {appComponent} from './AppCtrl'
import './App.css';

import AddSongCmp from '../addSong/AddSongCmp';
import {AddSongCtrl} from '../addSong/AddSongCtrl';

export const app = angular.module('app', [])
  .component('app', appComponent)
  
export default 'app';
