import AppCtrl from './AppCtrl';
import './App.css';
import AddSongCmp from '../addSong/AddSongCmp';
import {AddSongCtrl} from '../addSong/AddSongCtrl';
const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .component('app', {
    controller: AppCtrl,
    template: require('./App.html')
  })

export default MODULE_NAME;
