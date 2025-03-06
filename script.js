document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById("bgMusic");

    // Try autoplaying the music
    audio.play().catch(error => {
        console.log("Autoplay blocked. User interaction needed.");
    });
});

// Function to manually play music
function playMusic() {
    var audio = document.getElementById("bgMusic");
    audio.play();
}

// Function to pause music
function pauseMusic() {
    var audio = document.getElementById("bgMusic");
    audio.pause();
}
