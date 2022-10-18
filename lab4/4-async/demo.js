// https://chandan-02.github.io/anime-facts-rest-api/
// https://anime-facts-rest-api.herokuapp.com/api/v1/:anime_name

const axios = require('axios');

const getAnimeFacts = (animeName) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`)
            .then((response) => resolve(response.data.data)).catch((err) => reject(err.code));
    })
}

const getAnimeFactsAsync = async (animeName) => {
    const animeFacts = await axios.get(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`)
    .then(response => response.data.data).catch(err => err.code);
    return animeFacts;
}

getAnimeFacts('naruto')
    .then((facts) => console.log(facts))

getAnimeFactsAsync('naruto')
    .then((facts) => console.log(facts))