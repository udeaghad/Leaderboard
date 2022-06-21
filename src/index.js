import _ from 'lodash';
import './style.css';
import createList from './modules/createList';
 class Score {
    constructor (name, score) {
        this.name = name;
        this.score = score;
    }
 }

 

 const nameInput = document.querySelector('#name');
 const scoreInput = document.querySelector('#score');

 const addItem = () => {
    const newScore = new Score(nameInput.value, scoreInput.value);
    createList(newScore.name, newScore.score)
    nameInput.value = '';
    scoreInput.value = '';
     
    //const scoresList = document.querySelectorAll('.scores-list')
    const scoreItem = document.querySelectorAll('.score-item');
    for (let i = 0;i < scoreItem.length; i+=1){
        scoreItem[i].classList.toggle('bg-color')
    }
 }

 const submitBtn = document.querySelector('#submit');

 submitBtn.addEventListener('click', addItem)