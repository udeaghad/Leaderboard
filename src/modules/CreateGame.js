const createGame = async() => { 
    const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/'; 
  
       const result = await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify({
        name: 'My Dozzy Race'
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    const scoreResult = await result.json();
    return scoreResult
    } 

    
  