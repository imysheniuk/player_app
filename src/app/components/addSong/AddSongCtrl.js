export class AddSongCtrl {
  constructor() {

    this.newSong = {};

    this.addSongClick = (newSong) => {
      this.songs.push(newSong);
      this.newSong = {};
    };
  }};