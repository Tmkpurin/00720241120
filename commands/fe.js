import axios from 'axios'
// 一次引用所有有名字的東西取名成後面的東西
import * as cheerio from 'cheerio'
import template from '../templates/fe.js'
import fs from 'node:fs'

export default async (event) => {
  try {
    const { data } = await axios.get('https://wdaweb.github.io/')
    const $ = cheerio.load(data)
    // console.log($('#fe .card-title').text())
    const courses = []
    $('#fe .card').each(function () {
      const t = template()
      const url = new URL($(this).find('img').attr('src'), 'https://wdaweb.github.io').href
      const name = $(this).find('.card-title').text().trim()

      t.body.contents[0].url = url
      t.body.contents[2].contents[0].contents[0].contents[0].text = name

      courses.push(t)
      // courses.push($(this).text().trim())
    })

    const result = await event.reply({
      type: 'flex',
      altText: '課程查詢結果',
      contents: {
        type: 'carousel',
        contents: courses
      }
    })
    console.log(result)
    if (process.env.DEBUG === 'true' && result.message) {
      fs.writeFileSync('./dump/fe.json', JSON.stringify(courses, null, 2))
    }
  } catch (error) {
    console.log('error')
    console.error(error)
  }
}