class AppCtrl {
  constructor() {};

  $onInit() {
    this.songs = [
      {name: 'SoundHelix Song 1', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
      {name: 'SoundHelix Song 2', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"},
      {name: 'SoundHelix Song 3', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"},
      {name: 'SoundHelix Song 4', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"},
      {name: 'SoundHelix Song 5', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"},
      {name: 'SoundHelix Song 6', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"},
      {name: 'SoundHelix Song 7', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"},
      {name: 'SoundHelix Song 8', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"}
    ];
    this.newSong = {};

    document.addEventListener('play', function(event){
      let audios = document.getElementsByTagName('audio');
      for(let i = 0, len = audios.length; i < len; i++){
        if(audios[i] !== event.target){
          audios[i].pause();
        }
      }
    }, true);
  
    document.addEventListener('ended', function(event){
      let audios = document.getElementsByTagName('audio');
      let currentSongId = this.findNodeIndex(event.target.parentElement.parentElement);
      if(currentSongId == (audios.length -1)){
        audios[0].play();
      } else {
        audios[currentSongId + 1].play();        
        }
    }, true);
  }

  findNodeIndex(node) {
    let i = 0;
    while (node = node.previousSibling){
      if (node.nodeType === 1) { ++i }
    }
    return i;
  };

  removeItem(song) {
    let answer = confirm("Are you sure to delete a song?")
    if (answer==true) {
      let index = this.songs.indexOf(song);    
      this.songs.splice(index, 1);
    }
  }

  dblPlay(event) {
    event.target.parentElement.children[1].children[0].play();
  };

  addSongClick(newSong) {
    this.songs.push(newSong);
    this.newSong = {};
  };
}

  export const appComponent = {
    controller: AppCtrl,
    template: require('./App.html')
  }