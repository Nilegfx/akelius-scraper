const request = require('request');
const listScraper = require('./scrapers/list');
const apartmentScraper = require('./scrapers/apartment');
const cityPaths = require('./cityPaths.json');

const host = 'https://www.akelius.de';
const basePathname = '/en/search/apartments/';

const scrapApartment = (apartment) => new Promise((resolve, reject) => {
    const url = host + apartment.url;
    request(url, (error, response, body) => {
        if (error) {
            reject(error);
        }
        if (response.statusCode !== 200) {
            reject(`Invalid response: ${response}`);
        }
        const apartmentInfo = apartmentScraper.scrap(body);
        apartment = Object.assign(apartment, apartmentInfo);
        apartment.url = url;

        resolve(apartment);
    });
});

const scrapCity = city => new Promise((resolve, reject) => {
    const cityPath = cityPaths[city];
    if (!cityPath) {
        reject(`Invalid city: ${city}`);
    }
    const url = `${host}${basePathname}${cityPath}/list`;

    request(url, (error, response, body) => {
        if (error) {
            reject(error);
        }
        if (response.statusCode !== 200) {
            reject(`Invalid response: ${response}`);
        }
        const apartments = listScraper.scrap(body);
        const scrapPromises = apartments.map(apartment => scrapApartment(apartment));
        resolve(Promise.all(scrapPromises));
    });
});

exports.cities = Object.keys(cityPaths);
exports.scrapCity = scrapCity;
