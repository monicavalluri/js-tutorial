/**
 * Public APIs : https://github.com/public-apis/public-apis
 * Assignment: Try hitting an API from the list above and display the values 
 * JAM file: https://jamboard.google.com/d/1erocMSDQxpXnhCj7Qkz6saansiEywnYiDdgN8_NJgNo/edit?usp=meet_whiteboard
 **/
let fetchData = () => {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
    request.send();    
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          showData(this.responseText);
        }
      };

      // Needs knowledge of promises
      fetch('https://cat-fact.herokuapp.com/facts')
      .then(response => response.json())
      .then(data => showFetchApiData(data))
}

let showData = (responseData) => {
    let parsedData = JSON.parse(responseData);
    document.getElementById('repos').innerHTML = `<img width='200' src=${parsedData.message} />`
}

let showFetchApiData = (responseData) => {
    let repoNames = [];
    for(let i=0; i < responseData.length; i++) {
        let elementObject = responseData[i];
        repoNames.push(elementObject['text'])
        let textEl = document.createElement('li');
        textEl.innerText = elementObject['text'];
        document.getElementById('cats').appendChild(textEl)
    }
}