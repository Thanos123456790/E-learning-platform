let data = [
    {
        'id': '1.',
        'title': 'Basic Model of Turing Machine',
        'youtubeId': 'sX5_9xjr-9Q?si=UQXKVh1NjKPj2zu5',
    },
    {
        'id': '2.',
        'title': 'Turing Recognizable and Turing-Decidable Languages and Their Closure Properties',
        'youtubeId': '7200ygWo1S4?si=-Byvvn4v_YZY40In',
    },
    {
        'id': '3.',
        'title': 'Variants of Turing Machines',
        'youtubeId': 'RXrljRY5DIs?si=9TzbljO1n7wA3nDh',
    },
    {
        'id': '4.',
        'title': 'Non-Deterministic TMs and Equivalence with Deterministic TMs',
        'youtubeId': 'Jw6PYIcIil0?si=gnFqW0YeNmnqJZQH',
    },
    {
        'id': '5.',
        'title': 'Unrestricted Grammars and Equivalence with Turing Machines',
        'youtubeId': 'Bi2D-IMA5JI?si=Brj9CNwdC1oCPtGa',
    },
    {
        'id': '6.',
        'title': 'Turing Machines as Enumerators',
        'youtubeId': 'Zw1gwkwLy-Y?si=4pR70qxlN3bAubWB',
    },
];


// Define a variable to keep track of the currently playing video index
let currentVideoIndex = 0;

// Function to load and play YouTube video
function loadAndPlayYouTubeVideo(videoId, videoIndex) {
    const mainVideo = document.getElementById('mainVideo');
    mainVideo.src = `https://www.youtube.com/embed/${videoId}`;

    // Listen for the "load" event on the iframe to update the video title
    mainVideo.addEventListener('load', () => {
        const videoTitle = data[videoIndex].title;
        updateVideoTitle(videoTitle);

        // Play the video automatically after loading
        mainVideo.play();
    });

    // Remove the "active" class from all videos
    const videoElements = document.querySelectorAll('.video');
    videoElements.forEach((videoElement) => {
        videoElement.classList.remove('active');
    });

    // Add the "active" class to the clicked video
    const clickedVideo = videoElements[videoIndex];
    clickedVideo.classList.add('active');
}

// Function to update the video title
function updateVideoTitle(title) {
    const mainVideoTitle = document.querySelector('.main-video .title');
    mainVideoTitle.textContent = title;
}

const videosContainer = document.querySelector('.videos');

// Loop through your data and create playlist items
data.forEach((video, index) => {
    const playlistItem = document.createElement('div');
    playlistItem.classList.add('video');
    playlistItem.dataset.id = video.id;
    playlistItem.innerHTML = `
        <p>${video.id}</p>
        <h3 class="title">${video.title}</h3>
    `;

    // Add a click event listener to each playlist item
    playlistItem.addEventListener('click', () => {
        // Load and play the YouTube video when a playlist item is clicked
        loadAndPlayYouTubeVideo(video.youtubeId, index);

        // Update the current video index
        currentVideoIndex = index;
    });

    videosContainer.appendChild(playlistItem);
});

// Automatically load and play the first video when the page loads
if (data.length > 0) {
    loadAndPlayYouTubeVideo(data[currentVideoIndex].youtubeId, currentVideoIndex);
}

// Function to play the previous video
function playPreviousVideo() {
    if (currentVideoIndex > 0) {
        currentVideoIndex--;
        loadAndPlayYouTubeVideo(data[currentVideoIndex].youtubeId, currentVideoIndex);
    }
}

// Function to play the next video
function playNextVideo() {
    if (currentVideoIndex < data.length - 1) {
        currentVideoIndex++;
        loadAndPlayYouTubeVideo(data[currentVideoIndex].youtubeId, currentVideoIndex);
    }
}

// Add click event listeners to the previous and next buttons
const previousButton = document.querySelector('.previous a');
const nextButton = document.querySelector('.next a');

previousButton.addEventListener('click', (event) => {
    event.preventDefault();
    playPreviousVideo();
});

nextButton.addEventListener('click', (event) => {
    event.preventDefault();
    playNextVideo();
});