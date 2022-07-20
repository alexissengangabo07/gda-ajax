const button = document.querySelector('button')
const result = document.querySelector('#Result')

//AJAX AVEC FETCH

button.addEventListener('click', () => {

    checkFullstackExperience(this)

}) 

const checkFullstackExperience = ()=>{

    fetch('../data/developers.json').then( (Response)=>{

        return Response.json();

    }).then( (json)=>{

        for(let i=0; i<json.length; i++){

             if(json[i].role === "fullstack" && ( json[i].experience === 1 || json[i].experience === 2)){ 
                 result.textContent = json[i].first_name;
            
                }
            }
        })
}
