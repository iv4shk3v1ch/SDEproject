const axios = require('axios');

async function fetch_api(inputString){
    

    const options = {
      method: 'POST',
      url: 'https://gemini-pro-ai.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'a734804fffmshe9f80e2c384bf35p113925jsnc7e7add1c425',
        'X-RapidAPI-Host': 'gemini-pro-ai.p.rapidapi.com'
      },
      data: {
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: inputString
              }
            ]
          },
        ]
      }
    };
    
    try {
        const response = await axios.request(options);
        
        // Проверка наличия массива candidates в ответе
        if (response.data && response.data.candidates) {
            const candidates = response.data.candidates;

            // Проверка наличия элементов в массиве candidates
            if (candidates.length > 0) {
                const firstCandidate = candidates[0];

                // Проверка наличия объекта content в первом кандидате
                if (firstCandidate.content) {
                    const content = firstCandidate.content;

                    // Теперь вы можете работать с данными в объекте content
                    console.log(content);
                    return content;
                } else {
                    console.error('Отсутствует объект content в первом кандидате');
                }
            } else {
                console.error('Отсутствуют элементы в массиве candidates');
            }
        } else {
            console.error('Отсутствует массив candidates в ответе');
        }
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    fetch_api,
};