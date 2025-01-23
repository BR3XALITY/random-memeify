fetch('https://meme-api.com/gimme/1')
  .then(response => response.json())
  .then(data => {
    const img = document.getElementById('meme');
    img.src = data.memes[0].url; // Set the image source
  })
  .catch(error => console.error('Error fetching meme:', error));
