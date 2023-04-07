(function(){
  
  "use strict";

  let convertType = "miles";
  const heading = document.querySelector('h1');
  const intro = document.querySelector('p');
  const answerDiv = document.getElementById('answer');
  const form = document.getElementById('convert');
  
  document.addEventListener('keydown', function(event){
    
    const key = event.code;
    
    if(key === "KeyK"){
  
      convertType = "kilometers";
      heading.innerHTML = "Kilomters to Miles Converter";
      intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles";
  
      // change the heading
      // change the intro paragraph
      // change the value of the convertType variable
    }
    else if(key === "KeyM"){
      convertType = "miles";
      heading.innerHTML = "Miles to Kilometers Converter";
      intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers";
    }
  });
  
  form.addEventListener('submit', function(event){
    event.preventDefault();
  
    const distance = parseFloat(document.getElementById('distance').value);
  
    if (distance){
      if(convertType === "miles"){
        const conversion = (distance * 1.609).toFixed(3);
        answerDiv.innerHTML = `<h2>${distance} mi converts to ${conversion} km</h2>`;      
  
      }else if(convertType === "kilometers"){
        const conversion = (distance / 1.609).toFixed(3);
        answerDiv.innerHTML = `<h2>${distance} km converts to ${conversion} mi</h2>`;      
      }
    }
    else{
      answerDiv.innerHTML = "<h2>Please provide a number</h2>.";
    }
  
  });

})();
