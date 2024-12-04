const fs = require('node:fs');

fs.readFile('./assets/day2.txt', 'utf-8', (error, data) => {
  const arrByLine = data.replace(/\n/g, ',').split(',');
  let result = 0;
  arrByLine.forEach(line => {
    const lineArr = line.replace(/[ ,]+/g, ",").split(',');
    if(isTrue(lineArr)) result++
  })
  console.log(result)
})

function isTrue(lineArr) {
  let isDecrementing = false;
  let truethyResults = 0;
  for (let i = 0; i < lineArr.length - 1 ; i++) {
    const diff = Number(lineArr[i + 1]) - Number(lineArr[i]);
    if (i === 0) {
      isDecrementing = diff < 0;
    }

    if (Math.abs(diff) > 0 && Math.abs(diff) <=3 && (isDecrementing && diff < 0 || !isDecrementing && diff > 0)) {
      truethyResults++
    }

    if(truethyResults === lineArr.length - 2) {
      console.log(truethyResults)
      return true;
    }
  }
}