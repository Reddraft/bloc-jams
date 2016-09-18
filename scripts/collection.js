 var collectionItemTemplate =
    '<div class="collection-album-container column fourth">'
  + '  <img src="assets/images/album_covers/01.png"/>'
  + '  <div class="collection-album-info caption">'
  + '    <p>'
  + '      <a class="album-name" href="/album.html"> The Colors </a>'
  + '      <br/>'
  + '      <a href="/album.html"> Pablo Picasso </a>'
  + '      <br/>'
  + '      X songs'
  + '      <br/>'
  + '    </p>'
  + '  </div>'
  + '</div>'
;

window.onload = function() {
  //select album cover container an assi
  var collectionContainer = document.getElementsByClassName('album-covers')[0];
  //empty collectionContainer content
  collectionContainer.innerHTML = '';
  // loop to insert 12 albums in the collection container dinamically
  for (var i = 0; i < 12; i++) {
      collectionContainer.innerHTML += collectionItemTemplate;
  }

}
