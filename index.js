const PORT =8000
const cheerio = require('cheerio')
const express = require('express')
const axios = require('axios')
const app = express()
// const challenges = []
const { getChallenges } = require('./challenges')

app.get('/hello', (req, res) =>{
    res.json('Hello, Welcome to my Stream!!')
})

// app.get('/challenges', async (req, res) => {
//     // axios.get('https://ghw.mlh.io/challenges')
//     // .then(response=>{
//     //     const html = response.data
//     //     const $ = cheerio.load(html)

//     //     $('a:contains("")', html).each(function() {
//     //         const title = $(this).text()
//     //         const url = $(this).attr('href')
//     //         challenges.push({
//     //             title,
//     //             url
//     //         })
//     //     })
//     //     res.json(challenges)
//     // })
// })
    // const challenges = getChallenges()
   
    app.get('/challenges', async (req, res) => {
        try {
          const challenges = await getChallenges()
          res.json(challenges)
        } catch (error) {
          console.error(error.message)
          console.error(error.stack)
          res.status(500).send('Internal Server Error')
        }
      })

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))