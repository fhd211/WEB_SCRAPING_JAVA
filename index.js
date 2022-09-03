const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express= require('express')


const url = 'https://www.theguardian.com/international'

axios(url)
     .then(response =>{
      const html= response.data
      console.log(html)
      const $= cheerio.load(html)

      const article=[]
      $('.fc-slice-wrapper',html).each(function(){
        const title=$(this).text()
        const url=$(this).find('a').attr('href')
        article.push({
          title,
          url
        })
      })
      console.log(article)
     }).catch(err => console.log(err))

const app = express()
app.listen(PORT,()=> console.log('server running on PORT ${PORT}'))