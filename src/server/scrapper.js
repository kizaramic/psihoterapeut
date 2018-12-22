const express = require('express');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

app.get('/scrape', function (req, res) {

  const url = 'http://www.dpps.rs/clanstvo-terapeuti/spisak-clanova-terapeuta/';

  request(url, function (error, response, html) {
    if (!error) {
      let $ = cheerio.load(html);

      let title;
      let rating;
      const json = { title: "", rating: "" };

      $('.sorting').filter(() => {
        let data = $(this);
        title = data.children().first().text().trim();

        json.title = title;
      })

      $('.sorting_asc').filter(() => {
        let data = $(this);
        rating = data.text().trim();

        json.rating = rating;
      })
    }

    fs.writeFile('output.json', JSON.stringify(json, null, 4), function (err) {
      console.log('File successfully written! - Check your project directory for the output.json file');
    })

    res.send('Check your console!')
  })
})

app.listen('3000')
console.log('Magic is on port 3000');
exports = module.exports = app;