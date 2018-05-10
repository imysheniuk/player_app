import AddSongCtrl from './AddSongCtrl';
import './AddSong.css'

angular.module('addSong', [])
  .component('addSong', {
    
    controller: AddSongCtrl,
    template: require('./AddSong.html')
  })

export default 'addSong';