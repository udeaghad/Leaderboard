const createList = (nameInput, scoreInput) => {
  const scoresList = document.querySelector('.scores-list');
  const scoreItem = document.createElement('div');
  scoreItem.classList.add('score-item');
  scoreItem.innerHTML = `${nameInput}: ${scoreInput}`;
  scoresList.appendChild(scoreItem);
};

export default createList;