
var song = new Audio("EllieGoulding-HowLongWillILoveYou.mp3");
var muted = false;
var vol = 1;
song.type = 'audio/mp3';
// song.src = "Ellie";//Audio file source url

// song.document.getElementById("#playlist li a");
function skip(time) {
    if (time === 'back') {
        song.currentTime = (song.currentTime - 5);
    } else if (time === 'fwd') {
        song.currentTime = (song.currentTime + 5);
    }
}
function playpause() {
    if (!song.paused) {
        song.pause();
    } else {
        song.play();
    }
}
function stop() {
    song.pause();
    song.currentTime = 0;
    document.getElementById('seek').value = 0;
}
function setPos(pos) {
    song.currentTime = pos;
}
function mute() {
    if (muted) {
        song.volume = vol;
        muted = false;
        document.getElementById('mute').innerHTML = '<i class="fa fa-volume-up"></i>';
    } else {
        song.volume = 0;
        muted = true;
        document.getElementById('mute').innerHTML = '<i class="fa fa-volume-off"></i>';
    }
}
function setVolume(volume) {
    song.volume = volume;
    vol = volume;
}
song.addEventListener('timeupdate',function() {
    curtime = parseInt(song.currentTime,10);
    document.getElementById('seek').max = song.duration;
    document.getElementById('seek').value = curtime;
})


var audioElement = new Audio('EllieGoulding-HowLongWillILoveYou.mp3');
audioElement.addEventListener('loadeddata', () => {
    let duration = audioElement.duration;
    // The duration variable now holds the duration (in seconds) of the audio clip
})
