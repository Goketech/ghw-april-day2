const axios = require('axios')
const cheerio = require('cheerio')

async function getChallenges() {
  const response = await axios.get('https://ghw.mlh.io/challenges')
  const html = response.data
  const $ = cheerio.load(html)

  const challenges = []
  $('a:contains("")', html).each(function() {
    const title = $(this).text()
    const url = $(this).attr('href')
    challenges.push({
      title,
      url
    })
  })

  return challenges
}

module.exports = {
  getChallenges
}
