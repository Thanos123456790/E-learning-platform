let data = [
    {
        'id': '1.',
        'title': 'Engineering Costs & Estimation – Fixed, Variable, Marginal & Average Costs, Sunk Costs',
        'youtubeId': 'qsMRwgDsig8?si=QIsSJqxfkorQmgAv',
    },
    {
        'id': '2.',
        'title': 'Economic Decision Making Overview, Problems, Role, Decision Making Process',
        'youtubeId': 'mEOc4h8fqHU?si=qjD5ZGrzbJVMz0KC',
    },
    {
        'id': '3.',
        'title': 'Opportunity Costs',
        'youtubeId': 'XsfHH-dCUIA?si=bOTpnF-M2enfDK49',
    },
    {
        'id': '4.',
        'title': 'Non-recurring Costs',
        'youtubeId': 'dEJOrw6Rsa0?si=RZW9gjNfXYqpRBej',
    },
    {
        'id': '5.',
        'title': 'Incremental Costs',
        'youtubeId': 'd3_MMCQ5w2k?si=Dgl-9VIc4hdvNXYx',
    },
    {
        'id': '6.',
        'title': 'Cash Costs vs. Book Costs',
        'youtubeId': '8Q4vibED4Rg?si=wv-fu-120A0JtZjm',
    },
    {
        'id': '7.',
        'title': 'Life Cycle Cost',
        'youtubeId': 'dMtPYmwo8e8?si=qUx4Usu3-3OljVl4',
    },
    {
        'id': '8.',
        'title': 'Types of Estimates',
        'youtubeId': 'RYFHeBjlRAQ?si=Cx7HDeyHFo0fLfmE',
    },
    {
        'id': '9.',
        'title': 'Unit Model',
        'youtubeId': 'UBizxHnd-Ys?si=Z2EjxF-lHeyVdaXj',
    },
    {
        'id': '10.',
        'title': 'Segmenting Model',
        'youtubeId': 'wIjq4mpyUAE?si=E886yuqiRvRoptNT',
    },
    {
        'id': '11.',
        'title': 'Cost Indexes',
        'youtubeId': 'X_UYRh0QICw?si=5lZXHFkH6endOpZn',
    },
    {
        'id': '12.',
        'title': 'Power Sizing Model',
        'youtubeId': 'L90FvPYrUHg?si=VBV9kjAdnAysL1hO',
    },
    {
        'id': '13.',
        'title': 'Improvement and Learning Curve',
        'youtubeId': 'kiafp0at_Ew?si=Aj1gbXN00JL_Dgr7',
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
