
const fs = require('node:fs')

fs.readFile('./assets/day3.txt', 'utf-8', (err, data) => {
  const matches = data.match(/mul\(\d+,\d+\)/g)

  console.log(matches)

  let result = 0
  matches.forEach(matchVal => {
    const vals = matchVal.match(/\d+,\d+/g)[0].split(',')
    result += Number(vals[0]) * Number(vals[1])
  })

  console.log(result)

})