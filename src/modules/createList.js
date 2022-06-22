const createList = (record) => {
  for (let index = 0; index < record.length; index += 1) {
    const scoresList = document.querySelector('.scores-list');
    const scoreItem = document.createElement('div');
    scoreItem.classList.add('score-item');
    scoreItem.innerHTML = `${record[index].user}: ${record[index].score}`;
    scoresList.appendChild(scoreItem);
  }
};

export default createList;