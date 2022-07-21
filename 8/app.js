const project = document.querySelector('.realisedProject')
const experience = document.querySelector('.experience')
const role = document.querySelector('.role')
const birthday = document.querySelector('.birthday')
let button = document.querySelector('button')
const firstName = document.querySelector('.firstName')
const lastName = document.querySelector('.lastName')


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
            
                firstName.textContent = json[i].first_name;
                lastName.textContent = json[i].last_name;
                birthday.textContent = json[i].birthday;
                role.textContent = json[i].role;
                experience.textContent = json[i].experience;
                project.textContent = json[i].released_projects;
                }
            }
        })
}
