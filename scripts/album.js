
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

//Dynamically Generate Song Row Content

var createSongRow = function(songNumber,songName, songLength) {
  var template =
    '<tr class="album-view-song-item">'
  + '<td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
  + '<td class="song-item-title">' + songName + '</td>'
  + '<td class="song-item-duration">' + songLength + '</td>'
  + '</tr>'
  ;

  var $row = $(template);

  var clickHandler = function() {
    var songNumber = $(this).attr('data-song-number');

  	if (currentlyPlayingSong !== null) {
  		// Revert to song number for currently playing song because user started playing new song.
  		var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSong + '"]');
  		currentlyPlayingCell.html(currentlyPlayingSong);
  	}
  	if (currentlyPlayingSong !== songNumber) {
  		// Switch from Play -> Pause button to indicate new song is playing.
  		$(this).html(pauseButtonTemplate);
  		currentlyPlayingSong = songNumber;
  	} else if (currentlyPlayingSong === songNumber) {
  		// Switch from Pause -> Play button to pause currently playing song.
  		$(this).html(playButtonTemplate);
  		currentlyPlayingSong = null;
  	}    // clickHandler logic
  };

  var onHover = function(event) {
      var songNumberCell = $(this).find('.song-item-number');
      var songNumber = songNumberCell.attr('data-song-number');

      if (songNumber !== currentlyPlayingSong) {
          songNumberCell.html(playButtonTemplate);
      }
  };
  var offHover = function(event) {
    var songNumberCell = $(this).find('.song-item-number');
    var songNumber = songNumberCell.attr('data-song-number');

    if (songNumber !== currentlyPlayingSong) {
        songNumberCell.html(songNumber);
    }
};


    $row.find('.song-item-number').click(clickHandler);
    $row.hover(onHover, offHover);

    return $row;
};

//Set Current Album
var setCurrentAlbum = function(album) {
  // 1- Select the HTML elemets we want to display
  var $albumTitle = $('.album-view-title');
  var $albumArtist = $('.album-view-artist');
  var $albumReleaseInfo = $('.album-view-release-info');
  var $albumImage = $('.album-cover-art');
  var $albumSongList = $('.album-view-song-list');
  //2- Set the text value for each element we selected
  //firstChild property identifies the first child node of an element
  //nodeValue returns or sets the value of a node
  $albumTitle.text(album.title);
  $albumArtist.text(album.artist);
  $albumReleaseInfo.text(album.year + ' ' + album.label);
  $albumImage.attr('src', album.albumArtUrl);
  //3- clear the album song list HTML to make sure there are no interfering elements.
  $albumSongList.empty();
  //4- loop through all the songs from the specified album object and insert them into the HTML
  for(var i = 0; i < album.songs.length; i++) {
    //createSongRow() is called at each loop, passing in the song number, name, and length arguments from our album object.
    $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    $albumSongList.append($newRow);
  }

};

// Album play button template
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
// Album pause button template
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

// Store state of playing songs
var currentlyPlayingSong = null;

//execute setCurrentAlbum function when the page loads
$(document).ready(function() {

  setCurrentAlbum(albumPicasso);

});
