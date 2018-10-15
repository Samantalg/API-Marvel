var privateKey = '5ea822fd0bdba372ebe9e8bfc135d49eb4ca3b31';
var publicKey = '3fc2914a269877ff4218f563ab26fdb2';

function getMarvelComics() {
    var time = new Date().getTime();
    var hash = CryptoJS.MD5(time + privateKey + publicKey).toString();
    var url = 'https://gateway.marvel.com:443/v1/public/comics'
    var characterId = '1009718';

    var endpoint = 'https://gateway.marvel.com:443/v1/public/comics?ts=' + time + '&apikey=' + publicKey + '&hash=' + hash;
 
    console.log(url);

    var xhr = new XMLHttpRequest();
  
       xhr.open('GET', endpoint,true);
       xhr.onload = function() {
           console.log(xhr.responseText);
       };

       xhr.send();
       drawResult(results);
 };
 
 
 function drawResult(results) {
    for (var i = 0; i< results.length; i++) {
       var parrafo = document.createElement('p');
       var contenido = document.createTextNode(results[i].title);
       parrafo.appendChild(contenido);
 
       document.body.appendChild(parrafo);
    }
 }
 
 
 getMarvelComics();

 console.log();