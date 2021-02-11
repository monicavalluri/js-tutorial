let names = [];

let addNames = () => {
    let add = document.getElementById('add-name').value.toLowerCase();
    if(names.indexOf(add) === -1){
        names.push(add);
    }
    document.getElementById('show-result-list').innerText = names;
    document.getElementById('add-name').value = '';
}

let removeNames = () => {
    let remove = document.getElementById('remove-name').value.toLowerCase();
    if(names.indexOf(remove) !== -1) {
        names.splice(names.indexOf(remove), 1)
    } else{
        document.getElementById('error-msg').innerText = `Name ${remove} does not exist in the list`;
    }
    document.getElementById('show-result-list').innerText = names;
    document.getElementById('remove-name').value = '';
}