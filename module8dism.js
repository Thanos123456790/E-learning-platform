let data = [
    {
        'id': '1.',
        'title': 'Algebraic Structures with One Binary Operation',
        'youtubeId': '_i_XRDXcCJY?si=P7gWVivMVbiaVhTL',
    },
    {
        'id': '2.',
        'title': 'Semi Groups, Monoids',
        'youtubeId': 'ihQyZ7bJcRE?si=DbwYDiFukcgqH1hA',
    },
    {
        'id': '3.',
        'title': 'Congruence Relation and Quotient Structures',
        'youtubeId': 'G5rxi5acpfQ?si=WwgWmnGDT1b0P_fF',
    },
    {
        'id': '4.',
        'title': 'Free and Cyclic Monoids and Groups',
        'youtubeId': 'OGCRccWi4OE?si=hxt2DrG9M-VE1_a5',
    },
    {
        'id': '5.',
        'title': 'Permutation Groups',
        'youtubeId': 'N2vt4Mtj7Vc?si=Wph4nVc7sB7IKKIJ',
    },
    {
        'id': '6.',
        'title': 'Normal Subgroup',
        'youtubeId': 'MgRfQkeI7Vo?si=Fw4ZrV6RtH3sCiC4',
    },
    {
        'id': '7.',
        'title': 'Algebraic Structures with Two Binary Operations, Rings, Integral Domain, and Fields',
        'youtubeId': 'pSQ4wtLkn-g?si=Vwl__DZAAq7vmjqU',
    },
    {
        'id': '8.',
        'title': 'Boolean Algebra',
        'youtubeId': '0_hG_zbG9Ns?si=sEy3lj3tEqZpRxxl',
    },
    {
        'id': '9.',
        'title': 'Boolean Ring',
        'youtubeId': 'bD5US6iNmVA?si=G2GyXie-Z9NgX3M1',
    },
    {
        'id': '10.',
        'title': 'Identities of Boolean Algebra',
        'youtubeId': '2U71nZYb990?si=HQ_mIJ7pJ0lhVJkl',
    },
    {
        'id': '11.',
        'title': 'Duality',
        'youtubeId': 'b_KpV--c_n8?si=58W4127nWEOEouYC',
    },
    {
        'id': '12.',
        'title': 'Representation of Boolean Function',
        'youtubeId': 'ReOPZASFrTQ?si=qFQkjg3Ryo6Oz3ZR',
    },
    {
        'id': '13.',
        'title': 'Disjunction and Conjunctive Normal Form',
        'youtubeId': 'lXEGw80mXx4?si=fdEynuDgftaO-Bu7',
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
