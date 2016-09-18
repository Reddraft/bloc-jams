
//The Colors Album
var albumPicasso = {
  title: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: 'assets/images/album_covers/01.png',
  songs: [
    {
      title: 'Blue',
      duration: '4:26'
    },
    {
      title: 'Green',
      duration: '3:14' },
    {
      title: 'Red',
      duration: '5:01'
    },
    {
      title: 'Pink',
      duration: '3:21' },
    {
      title: 'Magenta',
      duration: '2:15'
    }
  ]
};

// The Telephone Album
var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        {
          title: 'Hello, Operator?',
          duration: '1:01'
        },
        {
          title: 'Ring, ring, ring',
          duration: '5:01'
        },
        {
          title: 'Fits in your pocket',
          duration: '3:21'
        },
        {
          title: 'Can you hear me now?',
          duration: '3:14'
        },
        {
          title: 'Wrong phone number',
          duration: '2:15'
        }
    ]
};
// The Telephone Album
var albumACDC = {
    title: 'Dirty Deeds Done Dirt Cheap',
    artist: 'AC/DC',
    label: 'Sony',
    year: '1976',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        {
          title: 'Dirty Deeds Done Dirt Cheap',
          duration: '3:52'
        },
        {
          title: 'Love at First Feel',
          duration: '3:11'
        },
        {
          title: 'Big Balls',
          duration: '2:39'
        },
        {
          title: 'Rocker',
          duration: '2:51'
        },
        {
          title: 'Problem Child',
          duration: '5:46'
        },
        {
          title: 'There\'s Gonna Be Some Rocki\'',
          duration: '3:18'
        },
        {
          title: 'Ain\'t No Fun(Waiting Round To Be Millionaire)',
          duration: '6:54'
        },
        {
          title: 'Ride On',
          duration: '5:50'
        },
        {
          title: 'Squealer',
          duration: '5:27'
        },
    ]
};

//Dynamically Generate Song Row Content

var createSongRow = function(songNumber,songName, songLength) {
  var template =
      '<tr class="album-view-song-item">'
    + '<td class="song-item-number">' + songNumber + '</td>'
    + '<td class="song-item-title">' + songName + '</td>'
    + '<td class="song-item-duration">' + songLength + '</td>'
    + '</tr>'
    ;

    return template;
};

//Set Current Album
var setCurrentAlbum = function(album) {
  // 1- Select the HTML elemets we want to display
  var albumTitle = document.getElementsByClassName('album-view-title')[0];
  var albumArtist = document.getElementsByClassName('album-view-artist')[0];
  var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
  var albumImage = document.getElementsByClassName('album-cover-art')[0];
  var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
  //2- Set the text value for each element we selected
  //firstChild property identifies the first child node of an element
  //nodeValue returns or sets the value of a node
  albumTitle.firstChild.nodeValue = album.title;
  albumArtist.firstChild.nodeValue = album.artist;
  albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
  albumImage.setAttribute('src', album.albumArtUrl);
  //3- clear the album song list HTML to make sure there are no interfering elements.
  albumSongList.innerHTML = '';
  //4- loop through all the songs from the specified album object and insert them into the HTML
  for(var i = 0; i < album.songs.length; i++) {
    //createSongRow() is called at each loop, passing in the song number, name, and length arguments from our album object.
    albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
  }

};
//select the image cover of the album
var albumImage = document.getElementsByClassName('album-cover-art')[0];
//list of albums
var albums = [albumPicasso, albumMarconi, albumACDC ];
//initialize index of first album that appears when click for the first time
var index = 1;

//execute setCurrentAlbum function when the page loads
window.onload = function() {
  //album that displays when the page loads
  setCurrentAlbum(albumPicasso);
  //add a click listener to the image cover
  albumImage.addEventListener('click', function(event) {
    //when click for the forst time it will show the album at the initialize index
    setCurrentAlbum(albums[index]);
    //add 1 to index so next time it clicks it shows another next album
    index++;
    //when it finish display the albums start from the first one again
    if (index === albums.length) {
      index = 0;
    }
  });
}
