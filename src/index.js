const fs = require('fs');
// const path = require('path');
// const resolve = require('path').resolve;
// Create reference instance
const marked = require('marked');
// Get reference
const renderer = new marked.Renderer();

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
  console.log(data);
  // renderer.html = function(data) {

  for (i = 0; i < data.length; i++) {
    let line = data[i];
    if (line === renderer.link) {
      console.log(line);
    } else {
      console.log('Not an href');
    }
  //   let renderedFile = renderer.html(data[i]);
  // console.log(renderedFile);
  // for (link in data) {  
  //   renderer.link = (href, title, text) => `<a target="_blank" href="${ href }" title="${ title }">${ text }</a>`;
  //   console.log(link);
  // };
  };
});


let newArr = [];
// const reading = (data) =>{
// console.log(typeof(data));
// String 
// let fileToArr = data.split();
// console.log(typeof(fileToArr));
//  Regresa undefined, por qué ya no lo lee?  : (( 

// fileToArr.forEach(line => {
//   let matcher = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
//   if (line === line.match(matcher)) {
//     newArr.push(line);
//   } else {
//  throw new Error('Line not valid');
// }
// }


// reading();


// Enviar data a un for para iterar por cada índice comparar con match
// Si coincide, enviar a arreglo nuevo
// Imprimir arreglo

// function is_url(str) {
//   regexp = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
//   if (regexp.test(str)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(is_url('https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php'));


