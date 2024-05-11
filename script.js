const jokeSetup = document.getElementById('joke-setup');
const jokePunchline = document.getElementById('joke-punchline');
const jokeBtn = document.getElementById('joke-btn');
let jokeData;

fetch('jokes.json')
  .then(response => response.json())
  .then(data => {
    jokeData = data.jokes;
    getRandomJokes();
  })
  .catch(error => console.error('Error:', error));

function getRandomJokes() {
  const randomIndex = Math.floor(Math.random() * jokeData.length);
  const joke = jokeData[randomIndex];

  if (joke.includes('? ')) {
    const [setup, punchline] = joke.split('? ');
    jokeSetup.innerText = `${setup}?`;
    jokePunchline.innerText = punchline;
  } else {
    jokeSetup.innerText = joke;
    jokePunchline.innerText = '';
  }
}

jokeBtn.addEventListener('click', getRandomJokes());