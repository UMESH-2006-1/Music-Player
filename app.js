let krishan = document.querySelector(".krishan");
let audio = document.querySelector(".audio");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let start = document.querySelector(".start");
let end = document.querySelector(".end");
let line = document.querySelector(".line");
let volume = document.querySelector("#volume");
let currentSong = 0;

volume.addEventListener("input", function () {
    audio.volume = volume.value / 100;
});

const songs = [
    { audio: "song1.mp3", image: "image1.jpg" },
    { audio: "song2.mp3", image: "image2.jpg" },
    { audio: "song3.mp3", image: "image3.jpg" },
    { audio: "song4.mp3", image: "image4.jpg" },
    { audio: "song5.mp3", image: "image5.jpg" },
    { audio: "song6.mp3", image: "image6.jpg" },
    { audio: "song7.mp3", image: "image7.jpg" },
    { audio: "song8.mp3", image: "image8.jpg" },
    { audio: "song9.mp3", image: "image9.jpg" },
    { audio: "song10.mp3", image: "image10.jpg" },
    { audio: "song11.mp3", image: "image11.jpg" },
    { audio: "song12.mp3", image: "image12.jpg" }
];

button3.addEventListener("click", function () {
    currentSong = (currentSong + 1) % songs.length;
    loadsong(currentSong);
});

button1.addEventListener("click", function () {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadsong(currentSong);
});

function loadsong(index){
    audio.src = songs[index].audio;
    krishan.src = songs[index].image;
    audio.volume = volume.value / 100;
    audio.load();
}

button2.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        button2.innerHTML = "⏸";
    } else {
        audio.pause();
        button2.innerHTML = "▶";
    }
});

audio.addEventListener("ended", function () {
    currentSong = (currentSong + 1) % songs.length;
    loadsong(currentSong);
    audio.play();
});

audio.addEventListener("timeupdate", function () {
    let currentMinutes = Math.floor(audio.currentTime / 60);
    let currentSeconds = Math.floor(audio.currentTime % 60).toString().padStart(2, "0");

    let totalMinutes = Math.floor(audio.duration / 60);
    let totalSeconds = Math.floor(audio.duration % 60).toString().padStart(2, "0");

    start.textContent = `${currentMinutes}:${currentSeconds}`;
    end.textContent = `${totalMinutes}:${totalSeconds}`;

    if (audio.duration) {
        let progress = (audio.currentTime / audio.duration) * 100;
        line.value = progress;
    }
});

loadsong(currentSong);