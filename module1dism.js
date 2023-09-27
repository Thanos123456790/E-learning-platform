let data = [
    {
        'id': '1.',
        'title': 'Operation and Laws of Sets',
        'youtubeId': 'Pgypb7ntkQE?si=Ux85BGP0FJrNlyhI',
    },
    {
        'id': '2.',
        'title': 'Cartesian Products',
        'youtubeId': 'K7K3XAM_V-o?si=9_TG8iGl0td4sQDQ',
    },
    {
        'id': '3.',
        'title': 'Binary Relation',
        'youtubeId': 'a81yyR60N3k?si=jfL2Tvoq7Bixn_km',
    },
    {
        'id': '4.',
        'title': 'Partial Ordering Relation',
        'youtubeId': 'qC2reWAo2mc?si=0TkpsHiCnHqYOdRv',
    },
    {
        'id': '5.',
        'title': 'Equivalence Relation',
        'youtubeId': 'VkWGSqRGozw?si=pvLpHYMo5qGXUegy',
    },
    {
        'id': '6.',
        'title': 'Image of a Set',
        'youtubeId': 'jw742vZRkOI?si=EuPusYA6SmZp9YkI',
    },
    {
        'id': '7.',
        'title': 'Sum and Product of Functions',
        'youtubeId': 'so9J1xaAD5I?si=GFgYmfCWifX6zoSl',
    },
    {
        'id': '8.',
        'title': 'Bijective Function',
        'youtubeId': 'zv2ONqtOK7g?si=710qb3iaQTJQKyqh',
    },
    {
        'id': '9.',
        'title': 'Inverse and Composite Function',
        'youtubeId': '7FJ08NILBuA?si=4XteJZxp5oytUIyF',
    },
    {
        'id': '10.',
        'title': 'Size of Set',
        'youtubeId': 'ZvmtUacSxl4?si=81vDCscjgRhFJQdQ',
    },
    {
        'id': '11.',
        'title': 'Finite and Infinite Sets, Countable and Uncountable Sets',
        'youtubeId': 's-hRgTgdVe4?si=rZVTs-lz3x3FdN3f',
    },
    {
        'id': '12.',
        'title': "Cantor's Diagonal Argument and The Power Set Theorem",
        'youtubeId': '5UOvYOZnF6Y?si=rdSLt8zDi_pny8NF',
    },
    {
        'id': '13.',
        'title': 'Schroeder-Bernstein Theorem',
        'youtubeId': 'bHMnkKpS-gY?si=G95beP9l06Kb1wFI',
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
