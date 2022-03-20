// npm install axios

const axios = require('axios');
const apiKey = 'IuqwGJ7J1NgBiYW5pMqzUGPbbV52LQ9fzs6Mhlox';

axios.get(`https://api.currencyapi.com/v3/latest?apikey=${apiKey}`)
    .then(function (res) {
        const currentCurrency = {
            date: res.data.meta.last_updated_at || new Date(),
            currencyCode: res.data.data['UZS'].code || null,
            value: res.data.data['UZS'].value
        }
        console.log(currentCurrency);
        return currentCurrency
    })
    .catch(function (error) {
        throw new Error(error);
    })

const convertWithUsd = async (codeName) => {
    try {
        const apiKey = 'IuqwGJ7J1NgBiYW5pMqzUGPbbV52LQ9fzs6Mhlox';
        const resp = await axios.get(`https://api.currencyapi.com/v3/latest?apikey=${apiKey}`)

        const currentCurrency = {
            date: resp.data.meta.last_updated_at || new Date(),
            currencyCode: resp.data.data[codeName].code || 'CODE_NAME_NOT_FOUND',
            value: resp.data.data[codeName].value || 'CODE_NAME_NOT_FOUND'
        }
        console.log(currentCurrency);
        return currentCurrency

    } catch (e) {
        console.log(e.message);
    }
}

convertWithUsd('EUR');
convertWithUsd('UZS');
