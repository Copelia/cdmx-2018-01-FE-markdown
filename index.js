const fs = require('fs');
// const path = require('path');
// const resolve = require('path').resolve;
// Create reference instance
const marked = require('marked');
const cheerio = require('cheerio');

// Resolver ruta parcial a absoluta
// if (path.isAbsolute() === true) {
const readingFile = (callback) => {
  fs.readFile('./README.md', 'utf8', (err, data) =>{
    if (err) {
      console.log('Error');
    } else {
      callback(data);
      // reading(data); 
    }
  });
};
// } else {
//   resolve(path);
// }
readingFile(callback = (data) => {
  let htmlContent = marked(data);
  // console.log(htmlContent); Aquí sólo imprime el primer elemento encontrado
  const $ = cheerio.load(htmlContent);
  // let link = $('a').attr('href');
  // console.log(link);
  let linksList = $('a').map(function(i, element) {
    return $(this).attr('href');
  }).toArray();

  links = linksList;
  console.log(links);
});


