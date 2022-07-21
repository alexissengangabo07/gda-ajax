const form=document.querySelector('.res')

fetch("./developers.json",{
    method:'GET'
})
.then(reponse=>{
    if(reponse.status===200){
        return reponse.json()
    }
})
.then (reponse=>{
    let filtredData = reponse.sort((a,b)=> a.first_name<b.first_name ? -1 : 1);
    filtredData.forEach((element,index) => { 
        if(Age(reponse[index].birthday)<18){

            const ligne=document.createElement('tr')
            ligne.className="tbody"
            const nom=document.createElement('td');
            nom.textContent=reponse[index].first_name;
            ligne.appendChild(nom);

            const dates = document.createElement('td');
            dates.textContent =reponse[index].birthday;
            ligne.appendChild(dates);

            const age = document.createElement('td');
            age.textContent = Age(reponse[index].birthday);
            ligne.appendChild(age);

            const role = document.createElement('td');
            role.textContent = reponse[index].role;
            ligne.appendChild(role);

            const exp = document.createElement('td');
            exp.textContent = reponse[index].experience;
            ligne.appendChild(exp);
         
            form.appendChild(ligne)
    }
    });
})

// const dates=new Date(reponse.birthday).toLocaleDateString();
//         console.log(dates)

function Age(year)
{
  birthday = new Date(year);
  return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
}

