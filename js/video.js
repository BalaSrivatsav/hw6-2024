var video;
video=document.querySelector("#player1");

function updateVolume() {
	let vol = document.querySelector("#volume");
	vol.innerHTML = video.volume * 100 + "%";
}

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	updateVolume();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
        video.playbackRate = (video.playbackRate * 0.9);
        console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
        video.playbackRate = (video.playbackRate / 0.9);
        console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if(video.currentTime + 10 > video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime += 10;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if(video.muted == false){
		video.muted = true;
		this.innerHTML = "Unmute";
	}
	else{
		video.muted = false;
		this.innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	console.log("Volume Change");
        video.volume = this.value/100;
	updateVolume();
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School Style");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Style");
	video.classList.remove("oldSchool");
});
