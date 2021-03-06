const createGame = async () => {
  const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

  const result = await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify({
      name: 'My Dozzy Race',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const scoreResult = await result.json();

  return scoreResult;
};

const id = 'OCF9lPabP9lxs6hZDHo3';
const player = document.querySelector('#name');
const playerScore = document.querySelector('#score');
const message = document.querySelector('.message');

const postScore = async () => {
  const baseUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;

  const response = await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify({
      user: player.value,
      score: playerScore.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  player.value = '';
  playerScore.value = '';
  const result = await response.json();

  if (result.result) {
    message.innerHTML = result.result;
  } else if (result.result === undefined) {
    message.innerHTML = result.message;
  }
  return result;
};

export { createGame, postScore, id };
