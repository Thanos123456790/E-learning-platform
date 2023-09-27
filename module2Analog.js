let data = [{
        'id': '1',
        'title': 'Binary to Decimal',
        'youtubeId': 'VLflTjd3lWA',
    },
    {
        'id': '2',
        'title': 'Binary no system',
        'youtubeId': '2joeDD5-v3s',
    },
    {
        'id': '3',
        'title': 'Boolean Algebra',
        'youtubeId': 'WW-NPtIzHwk',
    },
    {
        'id': '4',
        'title': 'BCD',
        'youtubeId': '0UVSPwzGw4U',
    },
    {
        'id': '5',
        'title': 'ASCII',
        'youtubeId': '0UVSPwzGw4U',
    },
    {
        'id': '6',
        'title': 'EBDIC',
        'youtubeId': '0UVSPwzGw4U',
    },
    {
        'id': '7',
        'title': 'GREY CODES',
        'youtubeId': 'R7uuIACpdGQ',
    },
    {
        'id': '8',
        'title': 'Signed binary number representation with 1s and 2s complement',
        'youtubeId': 'pXIfEklKsOQ',
    },
    {
        'id': '9',
        'title': 'Binary Arithmetic',
        'youtubeId': 'XHTUGBn-dSg',
    },
    {
        'id': '10',
        'title': 'Venn Diagram',
        'youtubeId': '8AvcGn0_9RQ',
    },
    {
        'id': '11',
        'title': 'Boolean algebra',
        'youtubeId': 'OeV3nEPu3I0',
    },
    {
        'id': '12',
        'title': 'Representation of sop and pos forms',
        'youtubeId': 'HO89lqPptxo',
    },
    {
        'id': '13',
        'title': 'Minimisation of logic expression by algebraic methods',
        'youtubeId': 'LZGq8wNOcq0',
    },
    {
        'id': '14',
        'title': 'Combinational circuit',
        'youtubeId': 'https://youtube.com/playlist?list=PLgwJf8NK-2e4zRyPzO6HI9sUOR8v-80RT',
    },
    {
        'id': '15',
        'title': 'Half adder',
        'youtubeId': 'zm71wFsj-fs',
    },
    {
        'id': '16',
        'title': 'Full adder',
        'youtubeId': 'wysI90Xtxvc',
    },
    {
        'id': '17',
        'title': 'Subtractor',
        'youtubeId': 'zo1oGc3uTHc',
    },
    {
        'id': '18',
        'title': 'Half subtractor',
        'youtubeId': '7WoTCwgx0kE',
    },
    {
        'id': '19',
        'title': 'Full subtractor',
        'youtubeId': 'dBXGGWbtt6U',
    },
    {
        'id': '20',
        'title': 'Encoder',
        'youtubeId': 'DqCDQH44y9w',
    },
    {
        'id': '21',
        'title': 'Decoder',
        'youtubeId': 'DqCDQH44y9w',
    },
    {
        'id': '22',
        'title': 'Multiplexer',
        'youtubeId': 'p6yPvw88BJk',
    },
    {
        'id': '23',
        'title': 'Demultiplexer',
        'youtubeId': 'Eb56gaw6JrQ',
    },
    {
        'id': '24',
        'title': 'Party generator',
        'youtubeId': 'c8qAti1zBVQ',
    },
    {
        'id': '25',
        'title': 'Sequential Circuit',
        'youtubeId': 'v0pxOfTg18Y',
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
