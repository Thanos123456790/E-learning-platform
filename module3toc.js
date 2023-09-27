let data = [
    {
        'id': '1.',
        'title': 'Context-Free Grammars (CFG)',
        'youtubeId': 'SlSA9vEXCm4?si=NtmmZlR-shsq0eaL',
    },
    {
        'id': '2.',
        'title': 'Context-Free Languages (CFL)',
        'youtubeId': '5_tfVe7ED3g?si=x1b7_nJpkhPHhPh5',
    },
    {
        'id': '3.',
        'title': 'Chomsky and Greibach Normal Forms',
        'youtubeId': 'iL6YrS_f1YM?si=7a6mQM8PZt5Is-RU',
    },
    {
        'id': '4.',
        'title': 'Non-Deterministic Pushdown Automata (PDA)',
        'youtubeId': '4ejIAmp_Atw?si=21ogMVrOaCSYZGkp',
    },
    {
        'id': '5.',
        'title': 'Parse Tree',
        'youtubeId': 'nUVmsW68K0Y?si=Jaf2aZQ89zJJO300',
    },
    {
        'id': '6.',
        'title': 'Ambiguity in CFG',
        'youtubeId': 'gUaAKAj-rqA?si=v2azp1QbpEvlX_2Z',
    },
    {
        'id': '7.',
        'title': 'Pumping Lemma for Context-Free Languages',
        'youtubeId': 'eQ0XkUk3qGk?si=gjAExUVCxv0dBv9o',
    },
    {
        'id': '8.',
        'title': 'Deterministic PDA',
        'youtubeId': 'LM_IdxuhZ4k?si=LhSSRNbCLVMZtEgi',
    },
    {
        'id': '9.',
        'title': 'Closure Properties of CFLs',
        'youtubeId': '0KsU-gavbE4?si=C7_BVX33l2pSqIRM',
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