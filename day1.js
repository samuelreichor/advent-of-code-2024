const fs = require('node:fs');
fs.readFile('./assets/day1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const processedString = data.replace(/[ ,]+/g, ",").replace(/\n/g, ',').split(',');
  let col1 = [];
  let col2 = [];
  processedString.forEach((stringNummer, index) => {
    if (index % 2 == 0) {
      col1.push(Number(stringNummer))
    } else {
      col2.push(Number(stringNummer))
    }
  })

  col1.sort()
  col2.sort()
  console.log(col1.length)
  console.log(col2.length)

  let result = 0
  let resultCol1 = 0
  let resultCol2 = 0

  col1.forEach((v,i) => {
    if(v < col2[i]) {
      result += col2[i] - v;
    } else {
      result += v - col2[i];
    }
  })
 /*  col1.forEach((n, i) => {
    resultCol1 += n;
  })
  col2.forEach((n, i) => {
    resultCol2 += n;
  }) */

  console.log(result);

  let matches = 0;
    for (i=0;i<col1.length;i++) {
        if (col2.indexOf(col1[i]) != -1)
            matches++;
    }
    console.log(matches);
});

