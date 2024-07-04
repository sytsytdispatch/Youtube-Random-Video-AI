// made by chatgpt lmfao


//code starts here
const box = document.createElement('div');


box.style.width = '15vw'; 
box.style.height = '50vh'; 
box.style.position = 'fixed';
box.style.top = '10px'; 
box.style.left = '10px'; 
box.style.backgroundColor = '#f0f0f0';
box.style.display = 'flex';
box.style.flexDirection = 'column'; 
box.style.alignItems = 'center';
box.style.justifyContent = 'center'; 
box.style.border = '2px solid #000';
box.style.zIndex = '1000'; 
document.body.appendChild(box);


const header = document.createElement('h1');
header.innerText = 'WTF! Cheats';
header.style.color = 'blue';
header.style.fontWeight = 'bold';
header.style.margin = '10px'; 


box.appendChild(header);


const centerContainer = document.createElement('div');
centerContainer.style.display = 'flex';
centerContainer.style.flexDirection = 'column';
centerContainer.style.alignItems = 'center';
centerContainer.style.justifyContent = 'center';
centerContainer.style.flex = '1'; 


box.appendChild(centerContainer);


const button = document.createElement('button');
button.innerText = 'Go to Random YouTube Video';


button.style.padding = '10px 20px';
button.style.fontSize = '16px';
button.style.cursor = 'pointer';

centerContainer.appendChild(button);


const fetchRandomVideoId = async () => {
  const searchTerms = ['funny', 'music', 'news', 'gaming', 'sports'];
  const randomSearchTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];
  const response = await fetch(`https://www.youtube.com/results?search_query=${randomSearchTerm}`);
  const text = await response.text();
  
  const videoIdMatch = text.match(/"videoId":"(.*?)"/g);
  if (videoIdMatch && videoIdMatch.length > 0) {
    const randomIndex = Math.floor(Math.random() * videoIdMatch.length);
    const randomVideoId = videoIdMatch[randomIndex].split('"')[3];
    return randomVideoId;
  } else {
    throw new Error('No videos found');
  }
};


const redirectToRandomYouTubeVideo = async () => {
  try {
    const randomVideoId = await fetchRandomVideoId();
    window.location.href = `https://www.youtube.com/watch?v=${randomVideoId}`;
  } catch (error) {
    console.error('Failed to fetch random video:', error);
  }
};


button.addEventListener('click', redirectToRandomYouTubeVideo);


const discordLink = document.createElement('a');
discordLink.href = 'https://discord.gg/kg5kCTqVYQ';
discordLink.innerText = 'Discord';
discordLink.style.marginTop = '10px';


box.appendChild(discordLink);

const githubLink = document.createElement('a');
githubLink.href = 'https://github.com/sytsytdispatch';
githubLink.innerText = 'GitHub';
githubLink.style.marginTop = '10px'; 

box.appendChild(githubLink);


const closeButton = document.createElement('button');
closeButton.innerText = 'X';
closeButton.style.position = 'absolute';
closeButton.style.top = '5px';
closeButton.style.right = '5px';
closeButton.style.padding = '5px';
closeButton.style.cursor = 'pointer';
closeButton.style.border = 'none';
closeButton.style.backgroundColor = 'red';
closeButton.style.color = 'white';


const onCloseButtonClick = () => {
  document.body.removeChild(box); 
};


closeButton.addEventListener('click', onCloseButtonClick);


document.body.appendChild(closeButton);

let isDragging = false;
let offsetX, offsetY;

const onMouseDown = (event) => {
 
  if (event.target !== button && event.target !== closeButton && event.target !== discordLink && event.target !== githubLink) {
    isDragging = true;
    offsetX = event.clientX - box.getBoundingClientRect().left;
    offsetY = event.clientY - box.getBoundingClientRect().top;
  }
};


const onMouseMove = (event) => {
  if (isDragging) {
    const newX = event.clientX - offsetX;
    const newY = event.clientY - offsetY;
    box.style.left = `${newX}px`;
    box.style.top = `${newY}px`;
  }
};


const onMouseUp = () => {
  isDragging = false;
};

// Add event listeners
box.addEventListener('mousedown', onMouseDown);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);
