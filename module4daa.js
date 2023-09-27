let data = [
    {
        'id': '1.',
        'title': 'Introduction to Trees',
        'youtubeId': 'YAdLFsTG70w?si=S6_Hdi_VyqMJbqHk',
    },
    {
        'id': '2.',
        'title': 'Binary Tree',
        'youtubeId': '9HlbVEVt_Y0?si=PejN6e8Zy1iGCUQC',
    },
    {
        'id': '3.',
        'title': 'Threaded Binary Tree',
        'youtubeId': 'ffgg_zmbaxw?si=cmh1p6fVzAFhrar3',
    },
    {
        'id': '4.',
        'title': 'Binary Search Tree',
        'youtubeId': '9HlbVEVt_Y0?si=PejN6e8Zy1iGCUQC',
    },
    {
        'id': '5.',
        'title': 'AVL Tree',
        'youtubeId': 'YWqla0UX-38?si=wWclV5_LCDHGwfqC',
    },
    {
        'id': '6.',
        'title': 'Tree Operations',
        'youtubeId': '94ErZ5K8XZg?si=hglm8SHPN3N84D3c',
    },
    {
        'id': '7.',
        'title': 'B-Tree',
        'youtubeId': '94ErZ5K8XZg?si=hglm8SHPN3N84D3c',
    },
    {
        'id': '8.',
        'title': 'B+ Tree',
        'youtubeId': 'DqcZLulVJ0M?si=p-xPQPTZ0fCJh8z-',
    },
    {
        'id': '9.',
        'title': 'Introduction to Sorting',
        'youtubeId': 'ByLlEk7zmyw?si=bbRqGzuGyUwDLMyb',
    },
    {
        'id': '10.',
        'title': 'Selection Sort',
        'youtubeId': '9oWd4VJOwr0?si=HmXtDBmcOSOUl5-H',
    },
    {
        'id': '11.',
        'title': 'Bubble Sort',
        'youtubeId': 're9ytVtt5zg?si=2nVCIjaxY8EF0AAV',
    },
    {
        'id': '12.',
        'title': 'Insertion Sort',
        'youtubeId': 's9fmGjFY1v0?si=lfy22NH_Zs7aLsJ-',
    },
    {
        'id': '13.',
        'title': 'Quick Sort',
        'youtubeId': 'tWCaFVJMUi8?si=Yj82ntKpbiaRRxSZ',
    },
    {
        'id': '14.',
        'title': 'Merge Sort',
        'youtubeId': 'tn9hxD8gx2M?si=Ynv4yKHK-Cr1en-1',
    },
    {
        'id': '15.',
        'title': 'Heap Sort',
        'youtubeId': 'UVW0NfG_YWA?si=YIWUZ4w1N_EZBbBZ',
    },
    {
        'id': '16.',
        'title': 'Hashing',
        'youtubeId': 'W5q0xgxmRd8?si=Qrinpy6Bmq8l0639',
    },
    {
        'id': '17.',
        'title': 'Introduction to Graphs',
        'youtubeId': '5hPfm_uqXmw?si=HHqTvVFsjRJBzv0f',
    },
    {
        'id': '18.',
        'title': 'Graphs BFS and DFS Traversal',
        'youtubeId': 'vf-cxgUXcMk?si=N-jd7lRRfBHiOoU5',
    },
    {
        'id': '19.',
        'title': 'Types of Edges in DFS',
        'youtubeId': 'wm6qRWGjvkA?si=gJUqb7LISl0F4jZH',
    },
    {
        'id': '20.',
        'title': 'Minimum Spanning Tree',
        'youtubeId': 'vNhvBrc02G4?si=7Bq3rPXbu1UfGUtK',
    },
    {
        'id': '21.',
        'title': 'Prim\'s Algorithm for MST',
        'youtubeId': 'ZtZaR7EcI5Y?si=jrUaxuFU97-jxImO',
    },
    {
        'id': '22.',
        'title': 'Kruskal Algorithm for MST',
        'youtubeId': 'EjVHtpWkIho?si=Dg0geYJLH9hZRMoO',
    },
    {
        'id': '23.',
        'title': 'Direct Cycle in Directed Graphs',
        'youtubeId': 'AK7BuT5MgU0?si=uDPHV0Nsxhd0RBku',
    },
    {
        'id': '24.',
        'title': 'Direct Cycle in Unirected Graphs',
        'youtubeId': 'vXrv3kruvwE?si=hQ7IBkGVf5neV-jq',
    },
    {
        'id': '25.',
        'title': 'Topological Sorting',
        'youtubeId': 'dis_c84ejhQ?si=WKk11Q6XI5zZUw1-',
    },
    {
        'id': '26.',
        'title': 'Dijkstra Algorithm',
        'youtubeId': 'smHnz2RHJBY?si=VmVqrqG8YudrAYFX',
    },
    {
        'id': '27.',
        'title': 'Bellman Ford Algorithm',
        'youtubeId': 'KudAWAMiQog?si=xvDB_XQ9bk9uwGrJ',
    },
    {
        'id': '28.',
        'title': 'Floyd Warshall Algorithm',
        'youtubeId': 'Gc4mWrmJBsw?si=qGm6A8NRlKGxIxJg',
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
