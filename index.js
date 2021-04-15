var songs = ["akh", "coca", "dilbar", "garmi", "illegal"];
var songName = ["Akh Lad Jaave", "Coca Cola", "Dilbar", "Garmi Song", "Illegal Weapon 2.0"]
var movieName = ["Loveyatri(2018)", "Luka Chuppi(2018)", "Sathyameva Jayathe(2018)", "Street Dancer 3D(2020)", "Street Dancer 3D(2020)"];
var singerName = ["Jubin Nautiyal, Badshah, Asees Kaur", "Tony Kakkar", "Neha Kakkar, Dhvani Bhanushali, Ikka Singh", "Neha Kakkar, Badshah", "Jasmine Sandlas, Garry Sandhu"];
var duration = ["02:59", "02:59", "02:59", "03:02", "03:08"]

var currIndex = -1;
var song = $(audio);
var isPlaying = false;
var liveSong = $("#audio");
var started = false;

$(".play-song").on("click", function () {
    var id = $(this).attr("id");
    playSong(id);
    // liveSong.trigger("pause");
});

$(".prev").on("click",prev);

$(".play-pause").on("click",playPause);

$(".next").on("click",next);

$(document).on("keypress",function(key){
    if(key.originalEvent.key == " ") playPause();
});

function prev(){
    if(currIndex<=0) currIndex = 4;
    else currIndex--;
    var newId = songs[currIndex];
    playSong(newId);
}

function playPause(){
    if(!started) return;
    if(isPlaying){
        liveSong.trigger("pause");
        isPlaying = false;
        $(".play-pause").removeClass("fa-pause");
        $(".play-pause").addClass("fa-play");
    }else{
        liveSong.trigger("play");
        isPlaying = true;
        $(".play-pause").removeClass("fa-play");
        $(".play-pause").addClass("fa-pause");
    }
}

function next(){
    if(currIndex==4) currIndex = 0;
    else currIndex++;
    var newId = songs[currIndex];
    playSong(newId);
}

function playSong(id){
    currIndex = songs.indexOf(id);
    var imageName = "images/" + id + ".jpg";
    var musicName = "sounds/" + id + ".mp3";
    $(".real-image").attr("src", imageName);
    $(".sg-name").text("Song Name: " + songName[currIndex]);
    $(".mv-name").text("Movie Name: " + movieName[currIndex]);
    $(".singer-name").text("Singer Name: " + singerName[currIndex]);
    $(".duration").text("Duration: " + duration[currIndex]);
    $(".play-pause").removeClass("fa-play");
    $(".play-pause").addClass("fa-pause");
    liveSong.attr("src",musicName);
    isPlaying = true;
    started = true;
}