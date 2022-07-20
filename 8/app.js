const button = document.querySelector('button')
const result = document.querySelector('#Result')

//AJAX AVEC FETCH

button.addEventListener('click', () => {

    checkFullstackExperience(this)

}) 

const checkFullstackExperience = ()=>{

    // Create an AJAX request

    let xhr = new XMLHttpRequest();

    // Prepare the Request

    xhr.open('GET', '../data/developers.json', true);

    // Send Request

    xhr.send();

    // Process the Request

    xhr.onload = () => {
        
        let data = xhr.responseText;
        let mobile = JSON.parse(data);

        for(let i=0; i<mobile.length; i++){

            if(mobile[i].role === "fullstack" && ( mobile[i].experience === 1 || mobile[i].experience === 2 )){

                result.textContent = mobile[i].first_name;
            }

        }
        
        
    }

}
