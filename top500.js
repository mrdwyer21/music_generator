'use strict';
function randomAlbum() {
    let num = Math.floor(Math.random() * albums.length);
    return albums[num];

}

function generateAlbum() {
    const albumData = randomAlbum();
    const albumEl = document.querySelector('.album');
    const artistEl = document.querySelector('.artist');
    const infoEl = document.querySelector('.info');
    const descripEl = document.querySelector('.description');
    albumEl.innerText = albumData.Album;
    artistEl.innerText = albumData.Artist;
    infoEl.innerText = albumData.Info;
    descripEl.innerText = albumData.Description;
}

const buttonEl = document.querySelector('.play-btn');
buttonEl.addEventListener('click', generateAlbum);

