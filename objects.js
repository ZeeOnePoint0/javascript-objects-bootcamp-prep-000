var playlist = new Object({periphery: 'The Bad Thing'});

function updatePlaylist(obj, artist, song) {

  return Object.assign({}, obj, {[artist]: song})

}

function removeFromPlaylist(obj, artist) {

  delete obj.artist

}
