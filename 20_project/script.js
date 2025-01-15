const song_name = document.querySelector('h2');
const singer_name = document.querySelector('p');
const prev_btn = document.getElementById('prev');
const play_btn = document.getElementById('play');
const pause_btn = document.getElementById('pause');
const next_btn = document.getElementById('next');
const audio_tag = document.getElementById('audio');
const img_tag = document.getElementById('song_cover');


const songs_list = [
    { song: 'Drippy', artist: 'sidhu moose wala', src: 'song1.mp3', cover: 'img1.jpg' },
    { song: '0-100', artist: 'sidhu moose wala', src: 'song2.mp3', cover: 'img2.jpg' },
    { song: 'The last ride', artist: 'sidhu moose wala', src: 'song3.mp3', cover: 'img3.jpg' },
    { song: 'Level', artist: 'sidhu moose wala', src: 'song4.mp3', cover: 'img4.jpg' },
    { song: 'Never Fold', artist: 'sidhu moose wala', src: 'song5.mp3', cover: 'img5.jpg' },
    { song: 'BLOODDUST', artist: 'sidhu moose wala', src: 'song6.mp3', cover: 'img6.jpg' },
]

let songIndex = 0;

loadSong(songs_list[songIndex]);

function loadSong(song) {
    song_name.innerText = song.song;
    singer_name.innerText = song.artist;
    audio_tag.src = song.src;
    img_tag.src = song.cover;
}

function play_song() {
    audio_tag.play();
    play_btn.style.display = 'none';
    pause_btn.style.display = 'inline';
}

function pause_song() {
    audio_tag.pause();
    play_btn.style.display = 'inline';
    pause_btn.style.display = 'none';
}

function prev_song() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs_list.length - 1;
    }
    loadSong(songs_list[songIndex]);
    play_song();
}

function next_song() {
    songIndex++;
    if (songIndex > songs_list.length - 1) {
        songIndex = 0;
    }
    loadSong(songs_list[songIndex]);
    play_song();
}