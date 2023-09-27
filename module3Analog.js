// Define your data array with YouTube video IDs
let data = [
    {
        'id': 'a1.',
        'title': 'Flip flops',
        'youtubeId': '1OM3Bd8GXUo',
    },
    {
        'id': 'a2.',
        'title': 'SR flipflop',
        'youtubeId': 'ij2CY8PmWoM',
    },
    {
        'id': 'a3.',
        'title': 'Jk flipflop',
        'youtubeId': 'qU7x1XLjhn4',
    },
    {
        'id': 'a4.',
        'title': 'T flipflop',
        'youtubeId': 'ECsNvi0wgyA',
    },
    {
        'id': 'a5.',
        'title': 'D flipflop',
        'youtubeId': 'SCZaFD9Zv1s',
    },
    {
        'id': 'a6.',
        'title': 'Jk master slave Flipflop',
        'youtubeId': 'IrbF3ew0Qxs',
    },
    {
        'id': 'a7.',
        'title': 'Ring counter',
        'youtubeId': 'esFP48kLxuw',
    },
    {
        'id': 'a8.',
        'title': 'Siso shift register',
        'youtubeId': 'NjMX4hohyRI',
    },
    {
        'id': 'a9.',
        'title': 'Sipo shift register',
        'youtubeId': 'NjMX4hohyRI',
    },
    {
        'id': 'a10.',
        'title': 'pipo shift register',
        'youtubeId': 'NjMX4hohyRI',
    },
    {
        'id': 'a11.',
        'title': 'piso shift register',
        'youtubeId': 'NjMX4hohyRI',
    },
    {
        'id': 'a12.',
        'title': 'Johnson counter',
        'youtubeId': 'r80M7hOpzhA',
    },
    {
        'id': 'a13.',
        'title': 'Basic concept of Synchronous and Asynchronous counter',
        'youtubeId': 'sdQO4ryAovs',
    },
    {
        'id': 'a14.',
        'title': 'Design of Mod N counter',
        'youtubeId': 'BuBMqdNNMLE',
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
