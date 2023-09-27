let data = [
    {
        'id': '1.',
        'title': 'Limits',
        'youtubeId': 'r1p8pUd7AWs?si=3UdSTTnUdmobAVZP',
    },
    {
        'id': '2.',
        'title': 'Continuity',
        'youtubeId': '-M7JSc5rAbk?si=B4ZcarynMFBC85Xh',
    },
    {
        'id': '3.',
        'title': 'Partial Derivatives',
        'youtubeId': '-LdChGbNbP4?si=Grbsp_sJhXYIEhk3',
    },
    {
        'id': '4.',
        'title': 'Chain Rule',
        'youtubeId': 'n2wyqq-K7_A?si=n8qyRBwaJacKFmpU',
    },
    {
        'id': '5.',
        'title': 'Implicit Function',
        'youtubeId': 'OBELQIPH5xY?si=hmtSICHMDKK3KL7k',
    },
    {
        'id': '6.',
        'title': 'Jacobian',
        'youtubeId': 'mHJOkHYmzhE?si=asaQz-JzHpnLyK0I',
    },
    {
        'id': '7.',
        'title': 'Directional Derivatives',
        'youtubeId': 'mHJOkHYmzhE?si=asaQz-JzHpnLyK0I',
    },
    {
        'id': '8.',
        'title': 'Total Derivative',
        'youtubeId': 'x88TqYdbH4Y?si=WmBSNnCQ8JgIZKqv',
    },
    {
        'id': '9.',
        'title': 'Maxima',
        'youtubeId': 'yzIB9Ytf_gk?si=qDoPPBmUwoFMpJxA',
    },
    {
        'id': '10.',
        'title': 'Minima',
        'youtubeId': 'yzIB9Ytf_gk?si=qDoPPBmUwoFMpJxA',
    },
    {
        'id': '11.',
        'title': 'Saddle Points',
        'youtubeId': 'jgT9ycyE2xY?si=N_PAEzTLw8YB0cKQ',
    },
    {
        'id': '12.',
        'title': 'Gradient',
        'youtubeId': 'FXTt6Sa79mI?si=HJ_AsDe3wr-k7WHt',
    },
    {
        'id': '13.',
        'title': 'Curl and Divergence',
        'youtubeId': 'ElS9wGUJn0M?si=0L57eDCO3VZ3pCCl',
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
