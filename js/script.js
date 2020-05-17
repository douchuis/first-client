
// a list of local musics
var listSong = [
    "../music/TaylorSwift-Gorgeous.mp3",
    "../music/MikePerry_TheOcean.mp3",
    "../music/EllieGoulding-HowLongWillILoveYou.mp3",
    "../music/NuocNgoai-PhanManhQuynh.mp3",
    "../music/TONESANDI-DANCEMONKEY.mp3",
    "../music/Maroon5_Memories.mp3",
    "../music/Roses_chainsmoker.mp3",
    "../music/Nhat-PhanManhQuynh.mp3",
    "../music/TamSuTuoi30-TrinhThangBinh.mp3",
    "../music/Adele-Hello.mp3",
    "../music/ClaraMae-I'mNotHer.mp3",
    "../music/JuliaMichaels-Anxiety-ft-SelenaGomez.mp3",
    "../music/CoChangTraiVietLenCay-PhanManhQuynh.mp3",
    "../music/EllieGoulding-LoveMeLikeYouDo.mp3",
    "../music/Safe&Sound-feat-theCivilWars.mp3",
    "../music/Adele-SomeoneLikeYou.mp3",
    "../music/NguoiKhacPiano-PhanManhQuynh.mp3",
    "../music/SelenaGomez-Marshmello-Wolves.mp3",
    "../music/ShawnMendes-CamilaCabello-Señorita.mp3",
];

var listSongName = [
    "Gorgeous - Taylor Swift",
    "The Ocean",
    "How Long Will I Love U",
    "Nuoc Ngoai",
    "Dance Monkey",
    "Memories",
    "Roses",
    "Nhat - PMQ",
    "Tam Su Tuoi 30",
    "Hello",
    "I'm not her",
    "Anxiety",
    "Co Chang Trai Viet Len Cay",
    "Love Me Like U Do",
    "Safe & Sound",
    "Someone Like U",
    "Nguoi Khac",
    "Wolves - Selena Gomez",
    "Señorita"
];
var x = 0;
var song = new Audio();
var muted = false;
var vol = 1;
song.type = 'audio/mpeg';
song.src =listSong[x];

function myFunction(x) {
    document.getElementById("songName").innerHTML = listSongName[x];
}

function skip(time) {
    if (time === 'back') {
        x -= 1 ;
        if(x < 0){
            x = listSong.length-1;
            song.src = listSong[x];
            song.play();
            myFunction(x);
        }else{
            song.src = listSong[x];
            song.play();
            myFunction(x);
        }
    } else if (time === 'fwd') {
        x +=1 ;
        if (x === listSong.length){
            x = 0;
            song.src = listSong[x];
            song.play();
            myFunction(x);
        }else{
            song.src = listSong[x];
            song.play();
            myFunction(x);
        }
    }
}
function play() {
    song.play();
    myFunction(x);
}

// play random
function random() {
    song.addEventListener('ended', function () {
        this.currentTime = 0;
        var nbList = listSong.length;
        var y = Math.floor((Math.random() * (nbList)));
        song.src = listSong[y];
        song.play();
        myFunction(y);
    },false);
    song.play();
}
function pause() {
    song.pause();
    document.getElementById('seek').value = song.currentTime ;
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
});
