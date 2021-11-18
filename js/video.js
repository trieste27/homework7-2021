var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var val = document.querySelector("#slider").value;
	var volume = document.querySelector("#volume");
	volume.innerHTML = (val + "%");
	var slider = document.getElementById("slider");
	var volume = document.getElementById("volume");
	volume.innerHTML = slider.value + "%";

	slider.oninput = function() {
		volume.innerHTML = this.value + "%";
		var video = document.querySelector("video");
		video.volume = this.value / 100;
		console.log(video.volume);
	}
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function setPlaySpeed() {
	video.playbackRate -= 0.05;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function setPlaySpeed() {
	video.playbackRate += 0.05;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function skip() {
	if ((video.currentTime + 15) >= video.duration){
		console.log("Original location " + video.currentTime)
		video.currentTime = 0
		console.log("Going back to beginning.")
	}
	else {
		console.log("Original location " + video.currentTime)
		video.currentTime += 15;
		console.log("New location " + video.currentTime)
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("volume");
	// video.muted = true;
	// change mute button
	var x = document.getElementById("mute");
	if (x.innerHTML === "Mute") {
		x.innerHTML = "Unmute";
		video.muted = true
	}
	else {
		x.innerHTML = "Mute";
		video.muted = false;
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});




