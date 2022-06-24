const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '../img/img1.jpg') {
      myImage.setAttribute('src','../img/img2.jpg');
    } else {
      myImage.setAttribute('src','../img/img1.jpg');
    }
}

let myButton = document.querySelector('button');

    function setUserName() {
        let myName = prompt('Please enter your name.');
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
      }

      if(!localStorage.getItem('name')) {
        setUserName();
      } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Mozilla is cool, ' + storedName;
      }

  myButton.onclick = function() {
    setUserName();
  }