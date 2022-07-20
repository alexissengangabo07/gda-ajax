const button = document.querySelector('button')
const result = document.querySelector('#Result')

button.addEventListener('click', () => {
    // Create an AJAX request

    let xhr = new XMLHttpRequest();

    // Prepare the Request

    xhr.open('GET', '../data/developers.json', true);

    // Send Request

    xhr.send();

    // Process the Request

    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log('success');
        }
    }

}) 

//AJAX AVEC FETCH
