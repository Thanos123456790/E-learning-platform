let data = [
    {
        'id': '1.',
        'title': 'Design of Control Unit - Hardwired and Microprogrammed Control',
        'youtubeId': 'https://www.youtube.com/live/7QJxchHoa_w?si=X4YIwlRbPkJKAEGm',
    },
    {
        'id': '2.',
        'title': 'Introduction to Instruction Pipelining',
        'youtubeId': 'https://youtu.be/nv0yAm5gc-E?si=ZQ0pwQMu8S0MjEQh',
    },
    {
        'id': '3.',
        'title': 'Introduction to RISC Architecture',
        'youtubeId': 'https://youtu.be/KspcdMLtE0E?si=2knAFHpaVQnBOL6q',
    },
    {
        'id': '4.',
        'title': 'CISC Architecture',
        'youtubeId': 'https://youtu.be/uBfiX2nIR3c?si=-60Ud2piYByNqvXb',
    },
    {
        'id': '5.',
        'title': 'RISC vs CISC Architecture',
        'youtubeId': 'https://youtu.be/ZW1gb3h-f9k?si=xNDZVG5YlCfCSufS',
    },
    {
        'id': '6.',
        'title': 'Concept of Handshaking',
        'youtubeId': 'https://youtu.be/t2GvlKhT9tY?si=rDjlDo7uv2k-cfjM',
    },
    {
        'id': '7.',
        'title': 'Polled',
        'youtubeId': 'https://youtu.be/QvSmbkcmff0?si=dR_aQO1IVsW34fm6',
    },
    {
        'id': '8.',
        'title': 'Interrupt',
        'youtubeId': 'https://youtu.be/QvSmbkcmff0?si=dR_aQO1IVsW34fm6',
    },
    {
        'id': '9.',
        'title': 'DMA',
        'youtubeId': 'https://youtu.be/qiaEGFh4D_I?si=_I67gvJMQszkDAKa',
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