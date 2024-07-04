// made by chatgpt lmfao
// please dont skid

//code starts here
const box = document.createElement('div');

// Style the box to be a smaller vertical rectangle
box.style.width = '15vw'; // Adjust width as desired
box.style.height = '50vh'; // Adjust height as desired
box.style.position = 'fixed';
box.style.top = '10px'; // Position from top
box.style.left = '10px'; // Position from left
box.style.backgroundColor = '#f0f0f0';
box.style.display = 'flex';
box.style.flexDirection = 'column'; // Vertical layout
box.style.alignItems = 'center';
box.style.justifyContent = 'center'; // Center items
box.style.border = '2px solid #000';
box.style.zIndex = '1000'; // Ensure it's above other elements
document.body.appendChild(box);

// Create a header element
const header = document.createElement('h1');
header.innerText = 'WTF! Cheats';
header.style.color = 'blue';
header.style.fontWeight = 'bold';
header.style.margin = '10px'; // Adjust margins as desired

// Append the header to the box
box.appendChild(header);

// Create a container for vertical centering
const centerContainer = document.createElement('div');
centerContainer.style.display = 'flex';
centerContainer.style.flexDirection = 'column';
centerContainer.style.alignItems = 'center';
centerContainer.style.justifyContent = 'center';
centerContainer.style.flex = '1'; // Take up remaining space

// Append the container to the box
box.appendChild(centerContainer);

// Create a button element
const button = document.createElement('button');
button.innerText = 'Go to Random YouTube Video';

// Style the button
button.style.padding = '10px 20px';
button.style.fontSize = '16px';
button.style.cursor = 'pointer';

// Append the button to the center container
centerContainer.appendChild(button);

// Function to fetch random YouTube video ID from search results
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

// Function to redirect to a random YouTube video
const redirectToRandomYouTubeVideo = async () => {
  try {
    const randomVideoId = await fetchRandomVideoId();
    window.location.href = `https://www.youtube.com/watch?v=${randomVideoId}`;
  } catch (error) {
    console.error('Failed to fetch random video:', error);
  }
};

// Add event listener to the button
button.addEventListener('click', redirectToRandomYouTubeVideo);

// Create Discord hyperlink
const discordLink = document.createElement('a');
discordLink.href = 'https://discord.gg/kg5kCTqVYQ';
discordLink.innerText = 'Discord';
discordLink.style.marginTop = '10px'; // Adjust margin top as desired

// Append Discord link to the box
box.appendChild(discordLink);

// Create GitHub hyperlink
const githubLink = document.createElement('a');
githubLink.href = 'https://github.com/sytsytdispatch';
githubLink.innerText = 'GitHub';
githubLink.style.marginTop = '10px'; // Adjust margin top as desired

// Append GitHub link to the box
box.appendChild(githubLink);

// Create a close button (X)
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

// Function to handle close button click
const onCloseButtonClick = () => {
  document.body.removeChild(box); // Remove the box from the DOM
};

// Add event listener to the close button
closeButton.addEventListener('click', onCloseButtonClick);

// Append the close button to the body
document.body.appendChild(closeButton);

// Make the box draggable
let isDragging = false;
let offsetX, offsetY;

// Function to handle mouse down event
const onMouseDown = (event) => {
  // Check if the target is not the button, close button, or links
  if (event.target !== button && event.target !== closeButton && event.target !== discordLink && event.target !== githubLink) {
    isDragging = true;
    offsetX = event.clientX - box.getBoundingClientRect().left;
    offsetY = event.clientY - box.getBoundingClientRect().top;
  }
};

// Function to handle mouse move event
const onMouseMove = (event) => {
  if (isDragging) {
    const newX = event.clientX - offsetX;
    const newY = event.clientY - offsetY;
    box.style.left = `${newX}px`;
    box.style.top = `${newY}px`;
  }
};

// Function to handle mouse up event
const onMouseUp = () => {
  isDragging = false;
};

// Add event listeners
box.addEventListener('mousedown', onMouseDown);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);
