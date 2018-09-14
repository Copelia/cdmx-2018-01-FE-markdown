const fs = require('fs');
const fetch = require('node-fetch');
const marked = require('marked');
const cheerio = require('cheerio');
let file = './README.md';

const mdLinks = new Promise((resolve, reject) => {
  fs.readFile(file, 'utf8', (err, data) => {
	  if (err) {
      reject(err);
    }
    resolve(data);
  });
});



const infoLinks = (response) => {
  console.log(response);
  
  // const htmlInfo = cheerio.load(fileToHtml);
  // console.log(fileToHtml);
  new Promise((resolve, reject) => {
    if (false) {
      reject('No existe archivo');
    } else {
      const fileToHtml = marked(response);
      resolve();  
    };
  });    
};      
        
 
//   const linksList = htmlInfo('a').map((val, i, element) => {
//   const hrefs = htmlInfo(this).attr('href');
//   const hrefText = htmlInfo(this).text();

//   linkObject = {
//     href: hrefs,
//     text: hrefText,
//     file: './README.md'
//   };

//   return linkObject;
// }).toArray();

//     console.log(linksList);
//     resolve(linksList);
//     });
//   });
// };
	
mdLinks
  .then(
    response => {
      // console.log(response);

      infoLinks(response);
      // return infoLinks;
    }
  )
  .then(
    response2 => {
      // console.log(response2);      
    }
  )
  .catch(
    err => console.log('Hubo un error:' + err.message));


// module.exports = {
//   mdLinks,
// };