let data = [
    {
        'id': '1.',
        'title': 'Cash Flow, Interest and Equivalence',
        'youtubeId': 'd7ni0Znww9Y?si=NDiN9kZpSebELwnB',
    },
    {
        'id': '2.',
        'title': 'Cash Flow Diagram',
        'youtubeId': 'uxTFwG1tMJ8?si=LbLAV3_seJki5zbK',
    },
    {
        'id': '3.',
        'title': 'Time Value of Money',
        'youtubeId': 'Wv6i3P8vxYA?si=BPzbUP6WLDeSX_Lf',
    },
    {
        'id': '4.',
        'title': 'Debt Repayment',
        'youtubeId': 'uT6XbwgiQ1c?si=pHqZwTKoxjlQn5uF',
    },
    {
        'id': '5.',
        'title': 'Nominal and Effective Interests',
        'youtubeId': '-_Zc8KNpTkw?si=zCT33iq6ekXSsz-O',
    },
    {
        'id': '6.',
        'title': 'Cash Flow & Rate of Return Analysis – Calculations',
        'youtubeId': 'ql7ezl24T9g?si=7AYWkDXql6VLXf1n',
    },
    {
        'id': '7.',
        'title': 'Treatment of Salvage Value',
        'youtubeId': 'HbRtg6t3qqY?si=FVkMT1AB3XlRdOqE',
    },
    {
        'id': '8.',
        'title': 'Annual Cash Flow Analysis',
        'youtubeId': 'x3W8MwD-BHA?si=a0mAXl6a95v0r248',
    },
    {
        'id': '9.',
        'title': 'Internal Rate of Return',
        'youtubeId': 'teLyFaVFZms?si=UVxT_vp0f5o_7ClU',
    },
    {
        'id': '10.',
        'title': 'Calculating Rate of Return',
        'youtubeId': 'teLyFaVFZms?si=UVxT_vp0f5o_7ClU',
    },
    {
        'id': '11.',
        'title': 'Incremental Analysis',
        'youtubeId': 'RtZQfCKoaHk?si=h_F4CeddBJVFig3U',
    },
    {
        'id': '12.',
        'title': 'Worth Analysis',
        'youtubeId': 'VvPrw1jyTEY?si=dmImUOiwXawvhvRc',
    },
    {
        'id': '13.',
        'title': 'Benefit Cost Ratio Analysis',
        'youtubeId': 'LbbVkoNDHHo?si=h7pL4nd2eKUCA64r',
    },
    {
        'id': '14.',
        'title': 'Sensitivity and Breakeven Analysis',
        'youtubeId': 'lcyH8gmoM_4?si=KDtvttguZWpnqpSU',
    },
    {
        'id': '15.',
        'title': 'Economic Analysis In The Public Sector - Quantifying And Valuing Benefits & Drawbacks',
        'youtubeId': '3X37NLgJ3aQ?si=nTF7RZznTEC8ss9C',
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
