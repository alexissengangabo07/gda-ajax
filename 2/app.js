// data : ../data/developers.json

const filtre = (mes_donnees=[]) => {
    mes_donnees = mes_donnees.filter((el) => (el.role && el.role == "frontend"));
    mes_donnees = mes_donnees.filter(el => (el.released_projects && el.released_projects > 3));
    return mes_donnees;
}

let liste_all = fetch("../data/developers.json")
.then(reponse => reponse.json())
.then(data_all => [...filtre(data_all)])
.then(filted_data => filted_data.forEach(develop => {
    let table = document.querySelector('tbody');
    let tr = document.createElement('tr');
    let first_name = tr.insertCell();
    let last_name= tr.insertCell();
    let birthday= tr.insertCell();
    let role= tr.insertCell();
    let experience= tr.insertCell();
    let released_projects = tr.insertCell();
    first_name.textContent = develop["first_name"];
    last_name.textContent = develop["last_name"];
    birthday.textContent = develop["birthday"];
    role.textContent = develop["role"];
    experience.textContent = develop["experience"];
    released_projects.textContent = develop["released_projects"];
    table.appendChild(tr);
}))



/*
    [
        {
            "first_name": "Alexis",
            "last_name": "Ngabo",
            "birthday": "2002-03-28",
            "role": "frontend",
            "experience": 3,
            "released_projects": 10
        }
    ]
*/