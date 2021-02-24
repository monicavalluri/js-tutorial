let somePromise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        reject();
    }, 1000)
})

somePromise
    .then(() => console.log('promise is resolved')) // if resolved then this will be called
    .catch(() => console.error('promise rejected')) // if rejected then this will be called


let fetchData = () => {
    document.getElementById('spinner').className = '';
    fetch('https://cat-fact.herokuapp.com/facts/hjsgdhf')
    .then((response) => {
        if(response.ok && response.status === 200) {
            let data = response.json()
            return data
        } else {
            throw new Error(`The fetch request failed with status ${response.status}`)
        }
    })
    .then((data) => {
        let repoNames = [];
        for(let i=0; i < data.length; i++) {
            let elementObject = data[i];
            repoNames.push(elementObject['text'])
            let textEl = document.createElement('li');
            textEl.innerText = elementObject['text'];
            document.getElementById('cats').appendChild(textEl)
        }
    })
    .catch(error => {
        console.error(error)
        alert(error)
    })
    .finally(() => {
        console.log('Ok Bye!')
        document.getElementById('spinner').className = 'hide';
    })
}



