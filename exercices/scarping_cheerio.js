const cheerio = require('cheerio')
const fs = require('fs')

const page = fs.readFileSync('page.html', 'utf-8')

const $ = cheerio.load(page)

const row = $('.row');

const parts = $('.col-sm-4.col-lg-4.col-md-4', row)

parts.each((index, part) => {

    if (index !== 0) {
        result.push({
          prix: $('h4:nth-child(1)', part).text(),
          nom: $('h4:nth-child(2) > a', part).attr('title')
        })
      }
})

console.log(
    JSON.stringify(
        result.map(d => ({...d, nom: Number(d.prix)}))
    )
)