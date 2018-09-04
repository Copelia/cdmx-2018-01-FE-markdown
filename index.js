const fs = require('fs');
const fetch = require('node-fetch');
// const path = require('path');
// './README.md'
// let path = './README.md';

// Resolver ruta parcial a absoluta
// const mdLinks = (callback) => {
//   fs.readFile('./README.md', 'utf8', (err, data) =>{
//     if (err) {
//       console.log('Error');
//     } else if (path.isAbsolute() !== true) {
//       resolve(path);
//     } else {
//       callback(data);
//       reading(data);

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
    }
  });
};
// } else {
//   resolve(path);
// }
readingFile(callback = (data) => {
  // Convirtiendo markdown a html para sacar links
  let htmlContent = marked(data);
  // console.log(htmlContent); 
  const $ = cheerio.load(htmlContent);
 
  const linksList = $('a').map(function(i, element) {
    const hrefs = $(this).attr('href');
    const anchorText = $(this).text();
    //  Obteniendo attributo href para sacar status y texto como requisito

    linkObject = {
      href: hrefs,
      text: anchorText,
      file: './README.md'
    };

    return linkObject;
  }).toArray();

  // Declarando variable de arreglo de objetos para iterar hrefs
  let links = linksList;
  // console.log(links);

  const arrLinks = [];
  for (let i = 0; i < links.length; i++) {
    arrLinks.push(links[i].href);
  }
  // Obteniendo arreglo de links para probar promise.all
  // console.log(arrLinks);

  // map every url to the promise fetch
  let requests = arrLinks.map(url => fetch(url));
  // Promise.all waits until all jobs are resolved
  Promise.all(requests)
    .then(responses => responses.forEach(
      response => console.log(`${response.url}: ${response.status}`)
    ));
});


// module.exports = index;
// module.exports = {
//   mdLinks,
// };
