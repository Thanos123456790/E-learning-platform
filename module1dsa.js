let data = [
    {
        'id': '1.',
        'title': 'Introduction to Divide and Conquer',
        'youtubeId': 'I8w2XN0w-fQ?si=NqZI2-oNsKdkO6pF',
    },
    {
        'id': '2.',
        'title': 'Implementation of Binary Search',
        'youtubeId': 'Jcw_8VVbD0I?si=ZOKkyXUXiLtF0vi6',
    },
    {
        'id': '3.',
        'title': 'Implementation of Merge Sort',
        'youtubeId': 'mB5HXBb_HY8?si=K-V7Rl7ARGAD4-fe',
    },
    {
        'id': '4.',
        'title': 'Implementation of Quick Sort',
        'youtubeId': 'ckqSrVBfgXo?si=xVJHlIzm_mgfm8pB',
    },
    {
        'id': '5.',
        'title': 'Find Maximum and Minimum Element from an Array of Integers',
        'youtubeId': 'GVFXYrMRqFw?si=mwXzBOGAAfXbgnvR',
    },
    {
        'id': '6.',
        'title': 'Find the Minimum Number of Scalar Multiplications Needed for Chain of Matrices',
        'youtubeId': 'eKkXU3uu2zk?si=eI-nQk2CmTF2tOYz',
    },
    {
        'id': '7.',
        'title': 'Implement All Pairs Shortest Path for a Graph (Floyd-Warshall Algorithm)',
        'youtubeId': 'c5vQS40VBcU?si=bDOtRNU85Y8_dxFm',
    },
    {
        'id': '8.',
        'title': 'Implement Traveling Salesman Problem',
        'youtubeId': 'JE0JE8ce1V0?si=lx0psBMxSYAlHbkq',
    },
    {
        'id': '9.',
        'title': 'Dijkstra Algorithm',
        'youtubeId': 'Gd92jSu_cZk?si=tSVedu5yqSfRNt56',
    },
    {
        'id': '10.',
        'title': 'Bellman Ford Algorithm',
        'youtubeId': 'FtN3BYH2Zes?si=QZ8VCxuQgc74SJbc',
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
