const fetch = require('node-fetch');

const apiKey = "0a713b34fdeb42dbb855be07fdb90764";
const url = "https://newsapi.org/v2/everything"; 

const headers = {
    'X-Api-Key': apiKey
};

const params = new URLSearchParams({
    q: '("assalto São Paulo" OR "furto São Paulo" OR "roubo vsSão Paulo")',
    language: 'pt',
    sortBy: 'publishedAt'
});

fetch(`${url}?${params.toString()}`, { headers })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    });