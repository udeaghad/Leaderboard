// import _ from 'lodash';
import './style.css';
import createList from './modules/createList.js';
import { createGame, postScore, id } from './modules/CreateGame.js';

createGame();

const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', postScore);

const getScore = async () => {
  const baseUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;

  const request = new Request(baseUrl);
  const response = await fetch(request);
  const displayScores = await response.json();
  createList(displayScores.result);

  const scoreItem = document.querySelectorAll('.score-item');
  for (let i = 0; i < scoreItem.length; i += 2) {
    scoreItem[i].classList.toggle('bg-color');
  }
};

getScore();

const refreshBtn = document.querySelector('.refresh-btn');

refreshBtn.addEventListener('click', () => window.location.reload());
