
// pikachu
document.querySelector('#pikachu').addEventListener('click',runpika)
function runpika(){
  let pika = document.querySelector('#pikachu').innerText
  let msg = new SpeechSynthesisUtterance();
  msg.text = pika
  window.speechSynthesis.speak(msg);
  // pikImage.classList.toggle("hidden")

  // background display
  document.querySelector('body').style.background = "yellow"
  ;
  document.querySelector('body').style.backgroundImage= 'url("https://www.animatedimages.org/data/media/1446/animated-pokemon-image-0016.gif")'; 
  
}

// charmander
document.querySelector('#charmander').addEventListener('click',run)
function run(){
  let char = document.querySelector('#charmander').innerText
  let msg = new SpeechSynthesisUtterance();
  msg.text = char
  window.speechSynthesis.speak(msg);
 
  // background display
  document.querySelector('body').style.background = "red";
  document.querySelector('body').style.backgroundBlendMode = "multiply";
  document.querySelector('body').style.backgroundImage= 'url("https://www.animatedimages.org/data/media/1446/animated-pokemon-image-0007.gif")'; 
  
}

// bulbasaur
document.querySelector('#bulbasur').addEventListener('click',runbulbasaur)
function runbulbasaur(){
  let bulb = document.querySelector('#bulbasur').innerText
  let msg = new SpeechSynthesisUtterance();
  msg.text = bulb
  window.speechSynthesis.speak(msg);
 
  // background display
  document.querySelector('body').style.background = "blue";
  document.querySelector('body').style.backgroundImage= 'url("https://www.animatedimages.org/data/media/1446/animated-pokemon-image-0010.gif")'; 
  
}




