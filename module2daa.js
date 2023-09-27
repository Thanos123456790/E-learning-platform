let data = [
    {
        'id': '1.',
        'title': 'Introduction',
        'youtubeId': 'rY5SM_3xWeU?si=NbNsCzbQRV0HsTEv',
    },
    {
        'id': '2.',
        'title': 'Applications of Stacks',
        'youtubeId': 'ABlwGVL2mY4?si=q8wqkorXdMswyhL9',
    },
    {
        'id': '3.',
        'title': 'Introduction',
        'youtubeId': 'ABlwGVL2mY4?si=q8wqkorXdMswyhL9',
    },
    {
        'id': '4.',
        'title': 'Simple queue',
        'youtubeId': 'u5hkRMbgsOA?si=h3jLr4QPnEAplO1a',
    },
    {
        'id': '5.',
        'title': 'Priority queue',
        'youtubeId': 'm9SVfOYTaBQ?si=oRJA_E02KW4itgKm',
    },
    {
        'id': '6.',
        'title': 'Circular queue',
        'youtubeId': 'dn01XST9-bI?si=pUg-MDdpQjqHp9Ep',
    },
    {
        'id': '7.',
        'title': 'Operations on Queues',
        'youtubeId': 'DneLxrPmmsw?si=ZXV0iK7hZ0lb6W41',
    },
    // Add more video data with YouTube video IDs
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