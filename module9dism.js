let data = [
    {
        'id': '11.',
        'title': 'Graphs and Their Properties',
        'youtubeId': 'HipVU5vz3Q8?si=YNYAdoi0Y0gHFK5V',
    },
    {
        'id': '12.',
        'title': 'Degree',
        'youtubeId': 'aXaVIxvweHA?si=EeJtcm56-794S84Q',
    },
    {
        'id': '13.',
        'title': 'Connectivity',
        'youtubeId': 'F_I-5HbwUkE?si=uec2-uucMVuSq_qS',
    },
    {
        'id': '14.',
        'title': 'Path, Cycle, Walk and Trail',
        'youtubeId': '8_G7Hg7CoNs?si=y5lNYdnE7We28rKr',
    },
    {
        'id': '15.',
        'title': 'Sub Graph',
        'youtubeId': 'PvzHamptcL8?si=i3uExENh9kEtsQpp',
    },
    {
        'id': '16.',
        'title': 'Isomorphism',
        'youtubeId': 'R_Pu-H_aRvs?si=mQufHVREnq-hbe0g',
    },
    {
        'id': '17.',
        'title': 'Eulerian and Hamiltonian Walks',
        'youtubeId': 'tuitCMLwPAE?si=A5h_wpjgbLlXhKXL',
    },
    {
        'id': '18.',
        'title': 'Graph Colouring and Chromatic Numbers',
        'youtubeId': 'HKRFK8W5JlE?si=jLou5wW0PuL1vYvc',
    },
    {
        'id': '19.',
        'title': 'Colouring Maps and Planar Graphs',
        'youtubeId': 'TmFiVjWwJNM?si=VjtnanIAfygB9_DI',
    },
    {
        'id': '20.',
        'title': 'Colouring Vertices',
        'youtubeId': '2Y8UtYfhpUI?si=uxRmEzTd1fI_RfhE',
    },
    {
        'id': '21.',
        'title': 'Colouring Edge',
        'youtubeId': 'YSSGmJwQSq0?si=-NWjBbzcYa_mLaSj',
    },
    {
        'id': '22.',
        'title': 'List Colouring',
        'youtubeId': 'oFGhNqk9bSs?si=V_iLU9cv2Ucx6Lts',
    },
    {
        'id': '23.',
        'title': 'Perfect Graph',
        'youtubeId': 'FpV_O-EjlIA?si=fa7Y-GiUCd5plYKt',
    },
    {
        'id': '24.',
        'title': 'Rooted Trees',
        'youtubeId': 'i6kjKKpBo78?si=f27VXQVLvxHkWLyo',
    },
    {
        'id': '25.',
        'title': 'Trees and Sorting',
        'youtubeId': 'Qg_a1jrIhoc?si=uAdK_8lZSvggLeo_',
    },
    {
        'id': '26.',
        'title': 'Weighted Trees and Prefix Codes',
        'youtubeId': 'tU-1nPpAO2o?si=yCh_8lphK8DJbl6e',
    },
    {
        'id': '27.',
        'title': 'Bi-connected Component and Articulation Points',
        'youtubeId': 'jFZsDDB0-vo?si=DWQUdcBFh3LBKd8p',
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
